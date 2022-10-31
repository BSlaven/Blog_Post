import React from 'react';
import { RichUtils } from 'draft-js';
import { blockTypes, blockHeadings } from './stylesConstants';

const BlockStylesComponent = ({ editorState, updateEditorState }) => {

  const totalBlockStyles = [ ...blockTypes, ...blockHeadings ];

  const applyStyle = (e, style) => {
    e.preventDefault();
    console.log(style);
  
    updateEditorState(RichUtils.toggleBlockType(editorState, style));
  }

  const isStyleApplied = type => {
    const currentType = editorState.getType();
    console.log(currentType);

    return currentType.has(type)
  }
  
  return (
    <div className='block-styles-container'>
      {totalBlockStyles.map(elem => (
        <div 
          className={`toolbar-item ${isStyleApplied(elem.style) ? 'active' : ''}`}
          key={elem.style}
          onClick={e => applyStyle(e, elem.style)}
        >
          {elem.label}
        </div>
      ))}
    </div>
  )
}

export default BlockStylesComponent;