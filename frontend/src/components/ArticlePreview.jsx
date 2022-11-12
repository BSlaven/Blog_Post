import React from 'react';
import { useSelector } from 'react-redux';
import draftToHtml from 'draftjs-to-html';
import { stateToHTML } from 'draft-js-export-html';
import { Markup } from 'interweave';

import { getCurrentArticle } from '../store/slices/editorSlice';

const ArticlePreview = () => {

  const article = useSelector(state => getCurrentArticle(state));

  let rawHTML = draftToHtml(article);
  const content = <Markup content={rawHTML} />;


  return (
    <div>
      {content}
    </div>
  )
}

export default ArticlePreview