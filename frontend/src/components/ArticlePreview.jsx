import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentArticle } from '../store/slices/editorSlice';

const ArticlePreview = () => {

  const article = useSelector(getCurrentArticle);
  console.log(`Ovo su blokovi trenutnog članka: ${article}`)
  
  return (
    <div>ArticlePreview</div>
  )
}

export default ArticlePreview