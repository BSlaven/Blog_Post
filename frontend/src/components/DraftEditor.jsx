import React, { useState } from 'react';
import { Editor, EditorState, convertToRaw } from 'draft-js';
import '../../node_modules/draft-js/dist/Draft.css';
import { useDispatch } from 'react-redux';

import EditorToolbar from './toolbar/EditorToolbar';

import { addCurrentArticle } from '../store/slices/editorSlice';

const DraftEditor = () => {

  const dispatch = useDispatch();
  
  const [ editorState, setEditorState ] = useState(() => EditorState.createEmpty());

  const updateEditorState = editorState => {
    setEditorState(editorState);
    dispatch(addCurrentArticle({ currentEditorState: convertToRaw(editorState.getCurrentContent()) }));
    console.log(convertToRaw(editorState.getCurrentContent()))
  }

  const getBlockStyle = (block) => {
    switch (block.getType()) {
      case "blockquote":
        return "RichEditor-blockquote";
      default:
        return null;
    }
  }

  return (
    <div>
      <EditorToolbar editorState={editorState} updateEditorState={updateEditorState} />
      <Editor
        blockStyleFn={getBlockStyle}
        editorState={editorState}
        onChange={updateEditorState}
        placeholder='Explore Your Way In'
      />
    </div>
  )
}

export default DraftEditor;