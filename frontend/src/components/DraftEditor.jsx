import React, { useState, useEffect } from 'react';
import { Editor, EditorState } from 'draft-js';

const DraftEditor = () => {

  const [ editorState, setEditorState ] = useState(
    () => EditorState.createEmpty()
  )

  useEffect(() => {
    console.log(editorState);
  }, [editorState])
  
  return (
    <div>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  )
}

export default DraftEditor;