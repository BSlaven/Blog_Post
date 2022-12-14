import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getArticleById } from '../store/slices/postsSlice';
import { parseClasses } from '../helpers/parseHelper';
import ParseHtmlContent from './ParseHtmlContent';

const ArticlePage = () => {

  const { id } = useParams();

  const post = useSelector(state => getArticleById(state, id));

  return (
    <div className="article-container">
      {post && <h1>{post.title}</h1>}
      {post && <h3>{post.description}</h3>}
      {post && JSON.parse(post.body).map(block => (
        <div key={block.text} className={`block-container ${parseClasses(block.inlineStyleRanges)}`}>
          {block.text}
        </div>
      ))}
    </div>
  )
}

export default ArticlePage