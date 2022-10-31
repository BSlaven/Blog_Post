import React from 'react';
import { RichUtils } from 'draft-js';
import { inlineStyles } from './stylesConstants';

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
      {inlineStyles.map((elem) => (
        <div 
          className={`toolbar-item ${isStyleApplied(elem.style) ? 'active' : ''}`}
          key={elem.style}
          onClick={e => applyStyle(e, elem.style)}
          isactive={isStyleApplied(elem.style).toString()}
        >
          {elem.icon || elem.label}
        </div>
      ))}
    </div>
  )
}

export default InlineStylesComponent;