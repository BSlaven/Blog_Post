import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articleBlocks: []
}

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
		addCurrentArticle(state, action) {
      const { blocks } = action.payload;
      if(blocks) {
        state.articleBlocks = blocks;
      }
		}
  }
})

export const getCurrentArticle = state => state.editor.articleBlocks;

export default editorSlice.reducer;