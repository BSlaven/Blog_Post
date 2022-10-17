import React, { useState } from 'react';
import DraftEditor from './DraftEditor';

const NewPost = () => {

  return (
    <div className="form-container">
      <h3 className='form-title'>Create new post</h3>
      <form className="form">
        <input type="text" name="post-title" id="post-title" />
        <DraftEditor />
      </form>
    </div>
  )
}

export default NewPost