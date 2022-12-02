import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import DraftEditor from './DraftEditor';
import ArticlePreview from './ArticlePreview';
import { getCurrentArticle } from '../store/slices/editorSlice';
import { getArticleById, updateArticle, createNewArticle, statusToIdle, clearRequestMessage, fetchRequestStatus } from '../store/slices/postsSlice';

const ArticleForm = () => {

  const [ showPreview, setShowPreview ] = useState(false);
  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { blocks } = useSelector(state => getCurrentArticle(state));
  const status = useSelector(fetchRequestStatus);
  const articleToUpdate = useSelector(state => getArticleById(state, id))
  
  useEffect(() => {
    setTitle(articleToUpdate?.title);
    setDescription(articleToUpdate?.description)
  }, [])

  if(status === 'succeeded') {
    navigate('/')
  }

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
    if(!title.trim() || !description.trim()) return;
    // if(id) {
    //   updatePost()
    // } else {
    //   createNewPost();
    // }
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

    setTimeout(() => {
      dispatch(statusToIdle());
    }, 2000)
    
    setTimeout(() => {
      dispatch(clearRequestMessage());
    }, 2000)
  }

  // FETCH ONE POST BY ID
  const getOne = async (e) => {
    const response = await fetch(`http://localhost:3001/posts/635460908162c6f3b2184859`)
    const onePost = await response.json();
  }

  // UPDATE POST
  const updatePost = async (e) => {

    const updatedArticle = {      
      title,
      description,
      body: JSON.stringify(blocks),
      createdAt: Date.now(),
      author: 'Slaven Bunijevac'
    }

    dispatch(updateArticle(updatedArticle))

    setTimeout(() => {
      dispatch(statusToIdle());
    }, 2000)
    
    setTimeout(() => {
      dispatch(clearRequestMessage());
    }, 2000)
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
        onClick={() => setShowPreview(prev => !prev)}>
          Show preview
      </button>
      {showPreview && <ArticlePreview />} 
    </div>
  )
}

export default ArticleForm