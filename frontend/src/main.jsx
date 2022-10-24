import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { fetchAllPosts } from './store/slices/postsSlice';

import './index.css'

store.dispatch(fetchAllPosts());
console.log('main.jsx file rendered')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
