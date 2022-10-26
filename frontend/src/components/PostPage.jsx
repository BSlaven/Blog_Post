import React from 'react'
import { useSelector } from 'react-redux'

import { getPostById } from '../store/slices/postsSlice'
import { useParams } from 'react-router-dom'

const PostPage = () => {

  const { id } = useParams();
  const post = useSelector(state => getPostById(state, Number(id)));
  
  return (
    <div>One post page</div>
  )
}

export default PostPage