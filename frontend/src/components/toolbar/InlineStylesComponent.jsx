import React from 'react';
import { RichUtils } from 'draft-js';
import { inlineStyles } from './inlineStyles';
import ToolbarItem from './ToolbarItem';

const InlineStylesComponent = ({ editorState, updateEditorState }) => {

  const applyStyle = (e, style) => {
    console.log(style)
    e.preventDefault();
  
    updateEditorState(RichUtils.toggleInlineStyle(editorState, style));
  }
  
  const isStyleApplied = style => {
    const currentStyle = editorState.getCurrentInlineStyle();

    console.log(currentStyle.has(style))
    return currentStyle.has(style)
  }
  
  return (
    <div className='inline-styles-container'>
      {inlineStyles.map((elem) => (
        <ToolbarItem 
          key={elem.style} 
          onClick={e => applyStyle(e, elem.style)}
          // isactive={isStyleApplied(elem.style).toString()}
          isactive={isStyleApplied(elem.style)}
          updateEditorState={updateEditorState}
        >
          {elem.icon || elem.label}
        </ToolbarItem>
      ))}
    </div>
  )
}

export default InlineStylesComponent;