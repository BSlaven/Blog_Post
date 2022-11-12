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
    // console.log(draftToHtml(editorState.getCurrentContent()))
  }

  // LINK: https://codesandbox.io/s/display-draft-js-as-html-forked-1e5jy5?file=/src/Example2.js:464-702

  // handleKeyCommand(command) {
  //   const { editorState } = this.state;
  //   const newState = RichUtils.handleKeyCommand(editorState, command);
  //   if (newState) {
  //     this.onChange(newState);
  //     return true;
  //   }
  //   return false;
  // }

  // const getBlockStyle = (block) => {
  //   switch (block.getType()) {
  //     case "blockquote":
  //       return "RichEditor-blockquote";
  //     default:
  //       return null;
  //   }
  // }

  return (
    <div>
      <EditorToolbar editorState={editorState} updateEditorState={updateEditorState} />
      <Editor
        // blockStyleFn={getBlockStyle}
        editorState={editorState}
        onChange={updateEditorState}
        placeholder='Explore Your Way In'
      />
    </div>
  )
}

export default DraftEditor;