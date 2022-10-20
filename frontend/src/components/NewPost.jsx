import React from 'react';
import DraftEditor from './DraftEditor';

const NewPost = () => {

  const createNewPost = async (e) => {
    const myPost = {
      title: 'Ovo je naslov prvog posta',
      body: 'Ovo je tijelo prvog posta',
      createdAt: Date.now(), 
      author: 'Slaven Bunijevac'
    }

    const newlyCreatedPost = await fetch('http://localhost:3001/posts/newPost', {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myPost)
    })

    // const response = await newlyCreatedPost.json();
    if(newlyCreatedPost.ok) {
      console.log('uspješno si kreirao novi post')
    } else {
      console.log('napravio si grešku glupane')
    }
  }

  return (
    <div className="form-container">
      <h3 className='form-title'>Create new post</h3>
      <form className="form">
        <div className="form-control">
          <label htmlFor="post-title">Title</label>
          <input type="text" name="post-title" id="post-title" />
        </div>
        <div className="form-control">
          <label htmlFor="post-description">Description</label>
          <input type="text" name="post-description" id="post-description" />
        </div>
        <div className="form-control">
          <label htmlFor="post-content">Content</label>
          <DraftEditor />
        </div>
        <button type='submit' className='newPostBtn'>Save post</button>
      </form>
      <button onClick={createNewPost}>Demo new post</button>
    </div>
  )
}

export default NewPost