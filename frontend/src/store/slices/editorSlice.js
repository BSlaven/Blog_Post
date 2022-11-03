import { 
  createSlice, 
  createAsyncThunk,
  createSelector
} from "@reduxjs/toolkit";

const initialState = {
  articleBlocks: []
}

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
		articleAdded(state, action) {
      const { blocks } = action.payload;
      if(blocks) {
        state.articleBlocks = blocks;
      }
		}
  }
})

export default editorSlice.reducer