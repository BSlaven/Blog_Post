import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  article: null
}

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
		addCurrentArticle(state, action) {
      const { currentEditorState } = action.payload;
      if(currentEditorState) {
        state.article = currentEditorState;
      }
		}
  }
})

export const getCurrentArticle = state => state.editor.article;

export const { addCurrentArticle } = editorSlice.actions;

export default editorSlice.reducer;