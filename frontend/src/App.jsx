import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './App.css'
import Layout from './components/Layout';
import Posts from './components/Posts';
import PostPage from './components/PostPage';
import Header from './components/Header';

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Posts />} />
            <Route path='post'>
              <Route index element={<PostPage />} />
              {/* <Route path=':postId' element={<SinglePostPage />} />
              <Route path='edit/:postId' element={<EditPostForm />} /> */}
            </Route>
          </Route>
        </Routes>
      </Router>
  )
}

export default App
