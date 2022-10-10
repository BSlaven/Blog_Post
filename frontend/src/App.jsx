import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css'
import Layout from './components/Layout';
import Posts from './components/Posts';
import PostPage from './components/PostPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Posts />} />
        <Route path='post'>
          <Route index element={<PostPage />} />
          {/* <Route path=':postId' element={<SinglePostPage />} />
          <Route path='edit/:postId' element={<EditPostForm />} /> */}
        </Route>

        {/* catch all - maybe replace with 404 component  */}
        {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
      </Route>
    </Routes>
  )
}

export default App
