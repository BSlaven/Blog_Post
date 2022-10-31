import React from 'react';
import { RichUtils } from 'draft-js';
import { blockTypes, blockHeadings } from './stylesConstants';

const BlockStylesComponent = ({ editorState, updateEditorState }) => {

  const totalBlockStyles = [ ...blockTypes, ...blockHeadings ];

  const applyStyle = (e, style) => {
    e.preventDefault();
  
    updateEditorState(RichUtils.toggleBlockType(editorState, style));
  }
  
  return (
    <div className='block-styles-container'>
      {totalBlockStyles.map(elem => (
        <div 
          className={`toolbar-item`}
          key={elem.style}
          onClick={e => applyStyle(e, elem.style)}
          // isactive={isStyleApplied(elem.style).toString()}
        >
          {elem.label}
        </div>
      ))}
    </div>
  )
}

export default BlockStylesComponent;