import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';

const DraftEditor = () => {
  
  const [ editorState, setEditorState ] = useState(editorState => {
    return EditorState.createEmpty();
  });


  return (
    <div>
      <Editor editorState={editorState} onChange={handleChange} />
    </div>
  )
}

export default DraftEditor;