import React from 'react';
import { RichUtils } from 'draft-js';
import { blockTypes, blockHeadings } from './stylesConstants';

const BlockStylesComponent = () => {

  const applyStyle = (e, style) => {
    e.preventDefault();
  
    updateEditorState(RichUtils.toggleBlockStyle(editorState, style));
  }
  
  return (
    <div>BlockStylesComponent</div>
  )
}

export default BlockStylesComponent;