import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';

const DraftEditor = () => {

  const [ editorState, setEditorState ] = useState(
    () => EditorState.createEmpty()
  )
  
  return (
    <div>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  )
}

export default DraftEditor;