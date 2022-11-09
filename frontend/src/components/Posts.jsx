import React from 'react'
import { useSelector } from 'react-redux';
import { allPosts, fetchRequestStatus } from '../store/slices/postsSlice';

import PostCard from './PostCard';

const Posts = () => {

  const posts = useSelector(allPosts);
  const status = useSelector(fetchRequestStatus);

  return (
    <div className="posts-container">  
      {status === 'loading' ? <p>Loading Spinner</p> : null}

      {posts && posts.map(post => (
        <PostCard key={post._id} {...post} />
      ))}
    </div>
  )
}

export default Posts