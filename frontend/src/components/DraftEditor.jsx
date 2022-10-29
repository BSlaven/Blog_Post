import React, { useState } from 'react';
import { Editor, EditorState, convertToRaw } from 'draft-js';

const DraftEditor = () => {
  
  const [ editorState, setEditorState ] = useState(editorState => {
    return EditorState.createEmpty();
  });

  const updateEditorState = editorState => {
    setEditorState(editorState);
    console.log(convertToRaw(editorState.getCurrentContent()))
  }


  return (
    <div>
      <Editor editorState={editorState} onChange={updateEditorState} />
    </div>
  )
}

export default DraftEditor;