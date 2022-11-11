import React from 'react'
import { useSelector } from 'react-redux'

import { getPostById } from '../store/slices/postsSlice'
import { useParams } from 'react-router-dom'

const PostPage = () => {

  const { id } = useParams();

  const post = useSelector(state => getPostById(state, id));
  
  return (
    <div>
      {post && <h3>{post.title}</h3>}
    </div>
  )
}

export default PostPage