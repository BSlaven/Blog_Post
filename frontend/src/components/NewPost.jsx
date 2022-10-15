import React from 'react';

const NewPost = () => {

  return (
    <div className="form-container">
      <h3 className='form-title'>Create New Post</h3>
      <form className="form">
        <input type="text" name="post-title" id="post-title" />
      </form>
    </div>
  )
}

export default NewPost