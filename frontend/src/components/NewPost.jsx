import React from 'react';
import DraftEditor from './DraftEditor';

const NewPost = () => {

  const formSubmitHandler = (e) => {
    e.preventDefault();
    createNewPost();
  }

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

  // FETCH ONE POST BY ID
  const getOne = async (e) => {
    const response = await fetch(`http://localhost:3001/posts/635460908162c6f3b2184859`)
    const onePost = await response.json();
  }

  // FETCH ALL POSTS
  const getAllPosts = async (e) => {
    const response = await fetch('http://localhost:3001/posts');
    const posts = await response.json();
  }

  // DELETE POST
  const deletePost = async (e) => {
    const response = await fetch(`http://localhost:3001/posts/6355ba2e404ef09e0c5c163f`, {
      method: 'DELETE'
    })

    const deletedPost = await response.json();
    console.log(deletedPost)
  }

  // UPDATE POST
  const updatePost = async (e) => {

    const updatedPost = {
      title: 'Jedan kratki title',
      body: 'Kokolo ko',
      createdAt: Date.now(),
      author: 'Slaven Bunijevac'
    }

    const response = await fetch(`http://localhost:3001/posts/edit/6355c00851364b05946cc917`, {
      method: 'PUT',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedPost)
    })

    const postUpdateResponse = await response.json();
  }

  return (
    <div className="form-container">
      <h3 className='form-title'>Create new post</h3>
      <form className="form" onSubmit={formSubmitHandler}>
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
    </div>
  )
}

export default NewPost