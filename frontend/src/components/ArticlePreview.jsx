import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentArticle } from '../store/slices/editorSlice';
import { ContentBlock } from 'draft-js';

const ArticlePreview = () => {

  const article = useSelector(state => getCurrentArticle(state));
  console.log(article);
  
  return (
    <div></div>
  )
}

export default ArticlePreview