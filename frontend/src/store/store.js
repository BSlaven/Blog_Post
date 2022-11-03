import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './slices/postsSlice';
import editorReducer from './slices/editorSlice';

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        editor: editorReducer
    }
})