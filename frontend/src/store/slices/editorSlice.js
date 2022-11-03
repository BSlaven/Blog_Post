import { 
  createSlice, 
  createAsyncThunk,
  createSelector
} from "@reduxjs/toolkit";

const initialState = {
  currentArticle: {}
}

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
		articleAdded(state, action) {
			const { postId, reaction } = action.payload
			const existingPost = state.entities[postId]
			if (existingPost) {
				existingPost.reactions[reaction]++
			}
		}
  }
})

export default editorSlice.reducer