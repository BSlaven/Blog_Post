import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentArticle } from '../store/slices/editorSlice';

const ArticlePreview = () => {

  const article = useSelector(state => getCurrentArticle(state));
  console.log(article)
  
  return (
    <div>slaven</div>
  )
}

export default ArticlePreview