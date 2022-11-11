import React from 'react'
import { useSelector } from 'react-redux'

import { getPostById } from '../store/slices/postsSlice'
import { useParams } from 'react-router-dom'

const ArticlePage = () => {

  const { id } = useParams();

  const post = useSelector(state => getPostById(state, id));

  console.log(JSON.parse(post.body))
  
  return (
    <div className="article-container">
      <h1>{post.title}</h1>
    </div>
  )
}

export default ArticlePage