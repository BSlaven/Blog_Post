import React from 'react'
import { useSelector } from 'react-redux'

import { getPostById } from '../store/slices/postsSlice'
import { useParams } from 'react-router-dom'

const ArticlePage = () => {

  const { id } = useParams();

  const post = useSelector(state => getPostById(state, id));

  return (
    <div className="article-container">
      {post && post.title}
      {post && JSON.parse(post.body).map(item => (
        <div key={item.text}>Slaven</div>
      ))}
    </div>
  )
}

export default ArticlePage