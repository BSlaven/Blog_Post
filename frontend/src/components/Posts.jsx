import React from 'react'
import { useSelector } from 'react-redux';
import { allPosts, fetchAllPostsStatus } from '../store/slices/postsSlice';

const Posts = () => {

  const posts = useSelector(allPosts);
  const status = useSelector(fetchAllPostsStatus);
  console.log(status)

  console.log('Ovo su postovi: ', posts);

  console.log('ovo je Posts komponenta')
  
  return (
    <div>
      {status === 'loading' ? <p>Loading Spinner</p> : <p>Učitao sam</p>}
      Ovo je komponenta za sve postove.
    </div>
  )
}

export default Posts