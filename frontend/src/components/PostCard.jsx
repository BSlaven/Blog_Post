import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';

import { clearRequestMessage, deleteArticle, statusToIdle } from '../store/slices/postsSlice';

const PostCard = ({ _id: id, title, description, author, createdAt: date }) => {

  const formattedDate = format(new Date(date), 'PPP');

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const readMoreClickHandler = e => {
    navigate(`/posts/${id}`);
  }

  const navigateToEditArticleForm = e => {
    navigate(`/article-form/${id}`)
  }

  const deletePostHandler = id => {
    dispatch(deleteArticle(id));
    setTimeout(() => {
      dispatch(statusToIdle());
      dispatch(clearRequestMessage());
    }, 2000)
  }

  return (
    <div className="card-container">
      <div className="post-header">
        <h3 className='post-title'>{title}</h3>
        <button className="read-more-btn" onClick={readMoreClickHandler}>Read</button>
      </div>
      <p className="post-description">{description}</p>
      <div className="post-details">
        <p onClick={navigateToEditArticleForm} className="post-author">By {author}</p>
        <span onClick={() => deletePostHandler(id)} className="post-date">{formattedDate}</span>
      </div>
    </div>
  )
}

export default PostCard;