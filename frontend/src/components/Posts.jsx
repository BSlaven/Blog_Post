import React from 'react'
import { useSelector } from 'react-redux';

const Posts = () => {

  const posts = useSelector(state => state.posts)
  console.log(posts);

  console.log('ovo je Posts komponenta')
  
  return (
    <div>
      Ovo je komponenta za sve postove.
    </div>
  )
}

export default Posts