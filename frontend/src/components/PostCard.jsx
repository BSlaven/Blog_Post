import React from 'react';

const PostCard = ({ _id: id, title, body }) => {

  const clickCardHandler = e => {
    console.log(`Kliknuo si na post ${id}`);
  }

  return (
    <div className="post-card" onClick={clickCardHandler}>
      <h3 className='post-card-title'>{title}</h3>      
      <p className="post-card-description">{body}</p>
    </div>
  )
}

export default PostCard;