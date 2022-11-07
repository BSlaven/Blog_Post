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

export const createNewArticle = createAsyncThunk('posts/addNewPost', async (newArticle) => {

  const newlyCreatedPost = await fetch(`${backendURL}/newPost`, {
    method: 'POST',
    headers: {
      'Accept':'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newArticle)
  })

  const response = await newlyCreatedPost.json();
  // if(newlyCreatedPost.ok) {
  //   console.log('uspješno si kreirao novi post')
  // } else {
  //   console.log('napravio si grešku glupane')
  // }

  return response.article
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
          .addCase(createNewArticle.fulfilled, (state, action) => {
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
export const getPostById = (state, id) => state.posts.posts.find(post => post._id === id);

export default postsSlice.reducer