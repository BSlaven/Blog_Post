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
  posts: [],
  requestMessage: ''
}

export const fetchAllPosts = createAsyncThunk('/posts/fetchAllPosts', async () => {
  
  const response = await fetch(backendURL);
  const posts = response.json();

  return posts;
})

export const createNewArticle = createAsyncThunk('posts/addNewPost', async (newArticle) => {

  try {
    const newlyCreatedPost = await fetch(`${backendURL}/newPost`, {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newArticle)
    })

    const response = await newlyCreatedPost.json();

    const { msg, article } = response;
    return { msg, article }

  } catch(error) {
    return { msg: 'Neuspješno si kreirao post'}
  }
})

export const updateArticle = createAsyncThunk('posts/updatePost', async (updatedArticle) => {
  const { id } = updatedArticle;
  try {
  const response = await fetch(`${backendURL}/edit/${id}`, {
    method: 'PUT',
    headers: {
      'Accept':'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedArticle)
  })
  return response.data
  } catch (err) {
  // return err.message
  return initialPost; // only for testing in redux
  }
})

export const deleteArticle = createAsyncThunk('posts/deletePost', async (id) => {
  try {
    const response = await fetch(`${backendURL}/${id}`, {
      method: 'DELETE'
    })

    const message = await response.json();
    
    if(response?.status !== 200) {
      return { msg: message.msg };
    } else {
      console.log(response.status)
      return { msg: message.msg, id }
    }
  } catch (err) {
    return { err, msg: 'nisi uspjeo obrisati' }
  }
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    statusToIdle(state, action) {
      state.status = 'idle'
    },
    clearRequestMessage(state, action) {
      state.requestMessage = ''
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllPosts.pending, (state, action) => {
        // state.status = 'loading'
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        // state.status = 'succeeded'

        state.posts = action.payload;
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        // state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(createNewArticle.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createNewArticle.fulfilled, (state, action) => {
        state.posts.push(action.payload.article);
        state.status = 'succeeded';
        state.requestMessage = action.payload.msg;
      })
      .addCase(createNewArticle.rejected, (state, action) => {
        state.status = 'failed';
        state.requestMessage = action.payload.msg;
      })
      .addCase(updateArticle.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log('Update could not complete')
          console.log(action.payload)
          return;
        }
        action.payload.date = new Date().toISOString();
        postsAdapter.upsertOne(state, action.payload)
      })
      .addCase(deleteArticle.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          state.status = 'failed';
          state.requestMessage = action.payload.msg;
          return;
        }
        
        const { id } = action.payload;
        state.status = 'succeeded';
        state.requestMessage = action.payload.msg;
        state.posts = state.posts.filter(post => post._id !== id);
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

export const { statusToIdle, clearRequestMessage } = postsSlice.actions

export const allPosts = state => state.posts.posts;
export const fetchRequestStatus = state => state.posts.status;
export const fetchRequestMessage = state => state.posts.requestMessage;
export const getPostById = (state, id) => state.posts.posts.find(post => post._id === id);

export default postsSlice.reducer