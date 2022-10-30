import React from 'react';

import InlineStylesComponent from './InlineStylesComponent';

const EditorToolbar = ({ editorState, updateEditorState }) => {
  return (
    <div>
      <InlineStylesComponent editorState={editorState} updateEditorState={updateEditorState} />
      {/* <BlockStylesComponent /> */}
    </div>
  )
}

export default EditorToolbar;