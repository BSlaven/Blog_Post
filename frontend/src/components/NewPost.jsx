import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DraftEditor from './DraftEditor';
import ArticlePreview from './ArticlePreview';
import { getCurrentArticle } from '../store/slices/editorSlice';
import { createNewArticle } from '../store/slices/postsSlice';

const NewPost = () => {

  const [ showPreview, setShowPreview ] = useState(false);
  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');

  const dispatch = useDispatch();

  const { blocks } = useSelector(state => getCurrentArticle(state));  

  const handleInputChange = e => {
    if(e.target.id === 'title') {
      setTitle(e.target.value);
    }
    
    if(e.target.id === 'description') {
      setDescription(e.target.value)
    }
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    createNewPost();
  }

  const createNewPost = async (e) => {
    const myPost = {
      title,
      description,
      body: JSON.stringify(blocks),
      createdAt: Date.now(),
      author: 'Slaven Bunijevac'
    }

    dispatch(createNewArticle(myPost))
  }

  // FETCH ONE POST BY ID
  const getOne = async (e) => {
    const response = await fetch(`http://localhost:3001/posts/635460908162c6f3b2184859`)
    const onePost = await response.json();
  }

  // DELETE POST
  const deletePost = async (e) => {
    const response = await fetch(`http://localhost:3001/posts/635900fe168de3f99640dcc7`, {
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
          <label htmlFor="title">Title</label>
          <input 
            type="text"
            name="post-title"
            id="title"
            value={title || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input 
            type="text"
            name="post-description"
            id="description"
            value={description || ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="post-content">Content</label>
          <DraftEditor />
        </div>
        <button type='submit' className='newPostBtn'>Save post</button>
      </form> 
      <button 
        className="show-preview-btn"
        // onClick={() => setShowPreview(prev => !prev)}>
        onClick={() => deletePost()}>
          Show preview
      </button>
      {showPreview && <ArticlePreview />} 
    </div>
  )
}

export default NewPost