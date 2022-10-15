import React from 'react';
import EditorJS from '@editorjs/editorjs';


const NewPost = () => {

  const editor = new EditorJS({
    holder: 'editorjs'
  });
  
  return (
    <div id='editorjs'>

    </div>
  )
}

export default NewPost