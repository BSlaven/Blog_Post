import React from 'react';
import { useSelector } from 'react-redux';
import draftToHtml from 'draftjs-to-html';
import { stateToHTML } from 'draft-js-export-html';

import { getCurrentArticle } from '../store/slices/editorSlice';

const ArticlePreview = () => {

  const article = useSelector(state => getCurrentArticle(state));


  console.log(article)
  console.log(draftToHtml(article))

  // const content = (
  //   blocks && blocks.map(block => (
  //     <div key={block.key}>
  //       {block.type}
  //     </div>
  //   ))
  // )

  let html = stateToHTML(article);
  console.log(html)



  return (
    // <div>{content}</div>
    <div>
      slaven
    </div>
  )
}

export default ArticlePreview