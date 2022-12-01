import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Layout from './components/Layout';
import Posts from './components/Posts';
import ArticlePage from './components/ArticlePage';
import NewPost from './components/NewPost';

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route index element={<Posts />} />
            <Route path='posts/:id'>
              <Route index element={<ArticlePage />} />
            </Route>
            <Route path='article-form' element={<NewPost />} />
            <Route path='article-form/:id' element={<NewPost />} />
          </Route>
        </Routes>
      </Router>
  )
}

export default App
