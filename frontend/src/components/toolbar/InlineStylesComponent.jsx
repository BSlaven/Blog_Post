import React from 'react';
import { RichUtils } from 'draft-js';
import { inlineStyles } from './inlineStyles';

// import { ToolbarItem, Container } from "./common";

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
        <p 
          key={elem.style} 
          onClick={e => applyStyle(e, elem.style)}
          isactive={isStyleApplied(elem.style).toString()}
        >
          {`SB-${index}`}
        </p>
      ))}
    </div>
  )
}

export default InlineStylesComponent;