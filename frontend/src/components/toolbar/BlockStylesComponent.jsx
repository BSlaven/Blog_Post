import React from 'react';
import { RichUtils, convertToRaw } from 'draft-js';
import { blockTypes, blockHeadings } from './stylesConstants';

const BlockStylesComponent = ({ editorState, updateEditorState }) => {

  const totalBlockStyles = [ ...blockTypes, ...blockHeadings ];

  const applyStyle = (e, style) => {
    e.preventDefault();
  
    updateEditorState(RichUtils.toggleBlockType(editorState, style));
  }

  const isBlockApplied = (blockType, index) => {
    // const currentType = convertToRaw(editorState.getCurrentContent());
    const currentType = convertToRaw(editorState.getCurrentContent()).blocks[index].type;

    // console.log(convertToRaw(editorState.getCurrentContent()).blocks[0].type);
    console.log(currentType);

    return true
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