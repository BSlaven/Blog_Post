import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostCard = ({ _id: id, title, body }) => {

  const navigate = useNavigate();

  const clickCardHandler = e => {
    console.log(`Kliknuo si na post ${id}`);
    navigate(`/post/${id}`);
  }

  return (
    <div className="post-card" onClick={clickCardHandler}>
      <h3 className='post-card-title'>{title}</h3>      
      <p className="post-card-description">{body}</p>
    </div>
  )
}

export default PostCard;