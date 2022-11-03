import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articleBlocks: []
}

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
		addCurrentArticle(state, action) {
      const { article } = action.payload.currentEditorState;
      if(article) {
        state.article = article;
      }
		}
  }
})

export const getCurrentArticle = state => state.editor.articleBlocks;

export const { addCurrentArticle } = editorSlice.actions;

export default editorSlice.reducer;