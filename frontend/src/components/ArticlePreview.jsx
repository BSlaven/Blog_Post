import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentArticle } from '../store/slices/editorSlice';
import { stateToHTML } from 'draft-js-export-html';
import { convertToRaw } from 'draft-js';

const ArticlePreview = () => {

  const article = useSelector(state => getCurrentArticle(state));
  console.log(article)

  // const convertStateToHTML = editorState => {
  //   return stateToHTML(editorState);
  // }
  
  return (
    <div>
      {/* {blocks && blocks.map(block => {
      })} */}
    </div>
  )
}

export default ArticlePreview