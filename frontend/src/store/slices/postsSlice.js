import { 
  createSlice, 
  createAsyncThunk,
  createSelector,
  // createEntityAdapter
} from "@reduxjs/toolkit";
import { sub } from 'date-fns';

const backendURL = 'http://localhost:3001/posts';

// const postsAdapter = createEntityAdapter({
//   sortComparer: (a, b) => b.date.localeCompare(a.date)
// })

const initialState = {
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  posts: []
}

export const fetchAllPosts = createAsyncThunk('/posts/fetchAllPosts', async () => {
  const response = await fetch(backendURL);
  const posts = response.json();

  return posts;
})

export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
  const response = await axios.post(POSTS_URL, initialPost)
  return response.data
})

export const updatePost = createAsyncThunk('posts/updatePost', async (initialPost) => {
  const { id } = initialPost;
  try {
  const response = await axios.put(`${POSTS_URL}/${id}`, initialPost)
  return response.data
  } catch (err) {
  // return err.message
  return initialPost; // only for testing in redux
  }
})

export const deletePost = createAsyncThunk('posts/deletePost', async (initialPost) => {
  const { id } = initialPost;
  try {
      const response = await axios.delete(`${POSTS_URL}/${id}`)
      if (response?.status === 200) return initialPost;
      return `${response?.status}: ${response?.statusText}`;
  } catch (err) {
      return err.message;
  }
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
		reactionAdded(state, action) {
			const { postId, reaction } = action.payload
			const existingPost = state.entities[postId]
			if (existingPost) {
				existingPost.reactions[reaction]++
			}
		}
  },
  extraReducers(builder) {
      builder
          .addCase(fetchAllPosts.pending, (state, action) => {
              state.status = 'loading'
          })
          .addCase(fetchAllPosts.fulfilled, (state, action) => {
              state.status = 'succeeded'

              state.posts = action.payload;
          })
          .addCase(fetchAllPosts.rejected, (state, action) => {
              state.status = 'failed'
              state.error = action.error.message
          })
          .addCase(addNewPost.fulfilled, (state, action) => {
              // Fix for API post IDs:
              // Creating sortedPosts & assigning the id 
              // would be not be needed if the fake API 
              // returned accurate new post IDs
              const sortedPosts = state.posts.sort((a, b) => {
                  if (a.id > b.id) return 1
                  if (a.id < b.id) return -1
                  return 0
              })
              action.payload.id = sortedPosts[sortedPosts.length - 1].id + 1;
              // End fix for fake API post IDs 

              action.payload.userId = Number(action.payload.userId)
              action.payload.date = new Date().toISOString();
              action.payload.reactions = {
                  thumbsUp: 0,
                  wow: 0,
                  heart: 0,
                  rocket: 0,
                  coffee: 0
              }
              postsAdapter.addOne(state, action.payload)
              state.posts.push(action.payload)
          })
          .addCase(updatePost.fulfilled, (state, action) => {
              if (!action.payload?.id) {
                  console.log('Update could not complete')
                  console.log(action.payload)
                  return;
              }
              action.payload.date = new Date().toISOString();
              postsAdapter.upsertOne(state, action.payload)
          })
          .addCase(deletePost.fulfilled, (state, action) => {
              if (!action.payload?.id) {
                  console.log('Delete could not complete')
                  console.log(action.payload)
                  return;
              }
              const { id } = action.payload;
              postsAdapter.removeOne(state, id)
          })
  }
})

// export const { 
//   selectAll: selectAllPosts,
//   selectById: selectPostById,
//   selectIds: selectPostIds
// } = postsAdapter.getSelectors(state => state.posts)

// export const getPostsStatus = (state) => state.posts.status;
// export const getPostsError = (state) => state.posts.error;
// export const getCount = (state) => state.posts.count;

// export const selectPostsByUser = createSelector(
//   [selectAllPosts, (state, userId) => userId],
//   (posts, userId) => posts.filter(post => post.userId === userId)
// )

// export const { reactionAdded } = postsSlice.actions

export const allPosts = state => state.posts.posts;
export const fetchAllPostsStatus = state => state.posts.status;
export const getPostById = (id, state) =>{
  return state.posts.posts.find(post => post.id === id)
};

export default postsSlice.reducer