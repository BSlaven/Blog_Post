import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getPostById } from '../store/slices/postsSlice';
import { parseHtmlContent, parseClasses } from '../helpers/parseHelper';


const ArticlePage = () => {

  const { id } = useParams();

  const post = useSelector(state => getPostById(state, id));
  console.log(post)

  return (
    <div className="article-container">
      {post && <h1>{post.title}</h1>}
      {post && <h3>{post.description}</h3>}
      {post && JSON.parse(post.body).map(block => (
        <div key={block.text} className="block-container">
          {block.text}
        </div>
      ))}
    </div>
  )
}

export default ArticlePage