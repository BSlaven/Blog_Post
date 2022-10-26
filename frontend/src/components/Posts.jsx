import React from 'react'
import { useSelector } from 'react-redux';
import { allPosts, fetchAllPostsStatus } from '../store/slices/postsSlice';

import PostCard from './PostCard';

const Posts = () => {

  const posts = useSelector(allPosts);
  const status = useSelector(fetchAllPostsStatus);

  console.log('Ovo su postovi: ', posts);

  return (
    <div className="posts-container">      
      {status === 'loading' ? <p>Loading Spinner</p> : <p>Učitao sam</p>}

      {posts && posts.map(post => (
        <PostCard key={post._id} post={post} />
      ))}
      Ovo je komponenta za sve postove.
    </div>
  )
}

export default Posts