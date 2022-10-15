import React from 'react';
import EditorJS from '@editorjs/editorjs';

const NewPost = () => {

  const editor = new EditorJS({
    holder: 'editorjs'
  });

  return (
    <div className="form-container">
      <h3>Create New Post</h3>
      <form className="form">

      </form>
      <div id='editorjs' className="editor"></div>
    </div>
  )
}

export default NewPost