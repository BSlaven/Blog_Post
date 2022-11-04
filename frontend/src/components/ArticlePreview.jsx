import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentArticle } from '../store/slices/editorSlice';

const ArticlePreview = () => {

  const { blocks } = useSelector(state => getCurrentArticle(state));
  console.log(blocks)

  return (
    <div>slaven</div>
  )
}

export default ArticlePreview