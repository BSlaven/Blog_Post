import React from 'react';

import InlineStylesComponent from './InlineStylesComponent';
import BlockStylesComponent from './BlockStylesComponent';

const EditorToolbar = ({ editorState, updateEditorState }) => {
  return (
    <div className='toolbar-container'>
      <InlineStylesComponent editorState={editorState} updateEditorState={updateEditorState} />
      <BlockStylesComponent editorState={editorState} updateEditorState={updateEditorState} />
    </div>
  )
}

export default EditorToolbar;