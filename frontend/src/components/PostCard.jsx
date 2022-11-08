import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';

import { deleteArticle } from '../store/slices/postsSlice';

const PostCard = ({ _id: id, title, description, author, createdAt: date }) => {

  const formattedDate = format(new Date(date), 'PPP');

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const readMoreClickHandler = e => {
    navigate(`/posts/${id}`);
  }

  const deletePostHandler = id => {
    dispatch(deleteArticle(id));
  }

  return (
    <div className="card-container">
      <div className="post-header">
        <h3 className='post-title'>{title}</h3>
        <button className="read-more-btn" onClick={readMoreClickHandler}>Read More</button>
      </div>
      <p className="post-description">{description}</p>
      <div className="post-details">
        <p className="post-author">By {author}</p>
        <span onClick={() => deletePostHandler(id)} className="post-date">{formattedDate}</span>
      </div>
    </div>
  )
}

export default PostCard;