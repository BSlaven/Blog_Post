import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostCard = ({ _id: id, title, body, author, createdAt: date }) => {

  const navigate = useNavigate();

  const clickCardHandler = e => {
    navigate(`/posts/${id}`);
  }

  return (
    <div className="card-container" onClick={clickCardHandler}>
      <h3 className='post-title'>{title}</h3>      
      <p className="post-description">{body}</p>
      <div className="post-details">
        <p className="post-author">{author}</p>
        <span className="post-date">{date}</span>
      </div>
    </div>
  )
}

export default PostCard;