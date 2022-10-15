import React from 'react';
import EditorJS from '@editorjs/editorjs';

const NewPost = () => {

  const editor = new EditorJS({
    holder: 'editorjs'
  });

  return (
    <div className="form-container">
      <h3 className='form-title'>Create New Post</h3>
      <form className="form">
        <input type="text" name="post-title" id="post-title" />
      </form>
      <div id='editorjs' className="editor"></div>
    </div>
  )
}

export default NewPost