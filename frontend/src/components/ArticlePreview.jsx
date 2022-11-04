import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentArticle } from '../store/slices/editorSlice';

const ArticlePreview = () => {

  const { blocks } = useSelector(state => getCurrentArticle(state));
  console.log(blocks)

  const content = (
    blocks && blocks.map(block => (

      <p key={block.key}>{block.type}</p>
    ))
  )

  

  return (
    <div>{content}</div>
  )
}

export default ArticlePreview