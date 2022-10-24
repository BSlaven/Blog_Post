import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Layout from './components/Layout';
import Posts from './components/Posts';
import PostPage from './components/PostPage';
import NewPost from './components/NewPost';

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Posts />} />
            <Route path='post'>
              <Route index element={<PostPage />} />
            </Route>
            <Route path='new' element={<NewPost />} />
          </Route>
        </Routes>
      </Router>
  )
}

export default App
