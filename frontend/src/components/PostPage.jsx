import React from 'react'
import { useSelector } from 'react-redux'

import { getPostById } from '../store/slices/postsSlice'
import { useParams } from 'react-router-dom'

const PostPage = () => {

  const { id } = useParams();
  
  const post = useSelector(state => getPostById(state, id));
  console.log('Ovo je moj post: ', post);
  
  return (
    <div>
      <h3>Nema naslova</h3>
    </div>
  )
}

export default PostPage