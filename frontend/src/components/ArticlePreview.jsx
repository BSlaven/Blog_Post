import React from 'react';
import { useSelector } from 'react-redux';
import draftToHtml from 'draftjs-to-html';
import { Markup } from 'interweave';
import { Interweave } from 'interweave';
import { stateToMarkdown } from 'draft-js-export-markdown';

import { getCurrentArticle } from '../store/slices/editorSlice';

const ArticlePreview = () => {

  const article = useSelector(state => getCurrentArticle(state));

  let rawHTML = stateToMarkdown(article);
  const content = <Interweave content={rawHTML} />;


  return (
    <div>
      {content}
    </div>
  )
}

export default ArticlePreview