import React from 'react';

const PostCard = ({ _id: id, title, description }) => {

  
  
  return (
    <div className="post-card" onClick={clickCardHandler}>
      <h3 className='post-card-title'>{title}</h3>      
      <p className="post-card-description">{description}</p>
    </div>
  )
}

export default PostCard;