import React from 'react';
import { RichUtils, convertToRaw } from 'draft-js';
import { blockTypes, blockHeadings } from './stylesConstants';

const BlockStylesComponent = ({ editorState, updateEditorState }) => {

  const totalBlockStyles = [ ...blockTypes, ...blockHeadings ];

  const applyStyle = (e, style) => {
    e.preventDefault();
  
    updateEditorState(RichUtils.toggleBlockType(editorState, style));
  }

  const isBlockApplied = (type) => {

    const selection = editorState.getSelection()
    const currentBlockType = editorState
		.getCurrentContent()
		.getBlockForKey(selection.getStartKey())
		.getType();

    return currentBlockType == type;
  }
  
  return (
    <div className='block-styles-container'>
      {totalBlockStyles.map((elem, index) => (
        <div 
          className={`toolbar-item ${isBlockApplied(elem.style) ? 'active' : ''}`}
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