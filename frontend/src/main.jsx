import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './store/store';
import { fetchAllPosts } from './store/slices/postsSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css'

store.dispatch(fetchAllPosts());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route to='/' element={<App />} />
      </Routes>
    </Router>
    <App />
  </React.StrictMode>
)
