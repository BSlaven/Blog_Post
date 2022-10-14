import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Layout from './components/Layout';
import Posts from './components/Posts';
import PostPage from './components/PostPage';

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Posts />} />
            <Route path='post'>
              <Route index element={<PostPage />} />
            </Route>
          </Route>
        </Routes>
      </Router>
  )
}

export default App
