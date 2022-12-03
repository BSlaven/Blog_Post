import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  article: {}
}

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
		addCurrentArticle(state, action) {
      const { currentEditorState } = action.payload;
      console.log(currentEditorState)
      if(currentEditorState) {
        state.article = currentEditorState;
      }
		}
  }
})

export const getCurrentArticle = state => state.editor.article;

export const { addCurrentArticle } = editorSlice.actions;

export default editorSlice.reducer;