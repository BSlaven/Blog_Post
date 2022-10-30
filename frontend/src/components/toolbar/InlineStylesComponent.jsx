import React from 'react';
import { RichUtils } from 'draft-js';
import { inlineStyles } from './inlineStyles';
import ToolbarItem from './ToolbarItem';

const InlineStylesComponent = ({ editorState, updateEditorState }) => {

  const applyStyle = (e, style) => {
    e.preventDefault();
  
    updateEditorState(RichUtils.toggleInlineStyle(editorState, style));
  }
  
  const isStyleApplied = style => {
    const currentStyle = editorState.getCurrentInlineStyle();

    return currentStyle.has(style)
  }
  
  return (
    <div className='inline-styles-container'>
      {inlineStyles.map((elem, index) => (
        <ToolbarItem 
          key={elem.style} 
          onClick={e => applyStyle(e, elem.style)}
          isactive={isStyleApplied(elem.style).toString()}
        >
          {elem.icon || elem.label}
        </ToolbarItem>
      ))}
    </div>
  )
}

export default InlineStylesComponent;