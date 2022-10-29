import React, { useState } from 'react';
import { Editor, EditorState, convertToRaw } from 'draft-js';
import '../../node_modules/draft-js/dist/Draft.css';

const DraftEditor = () => {
  
  const [ editorState, setEditorState ] = useState(() => EditorState.createEmpty());

  const updateEditorState = editorState => {
    setEditorState(editorState);
    console.log(convertToRaw(editorState.getCurrentContent()))
  }

  return (
    <div>
      <Editor 
        editorState={editorState}
        onChange={updateEditorState}
        placeholder='Explore Your Way In'
      />
    </div>
  )
}

export default DraftEditor;