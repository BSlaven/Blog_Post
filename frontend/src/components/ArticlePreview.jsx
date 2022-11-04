import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentArticle } from '../store/slices/editorSlice';

const ArticlePreview = () => {

  const { blocks } = useSelector(state => getCurrentArticle(state));

  const content = (
    blocks && blocks.map(block => (
      <div key={block.key}>
        {block.type}
      </div>
    ))
  )



  return (
    <div>{content}</div>
  )
}

export default ArticlePreview