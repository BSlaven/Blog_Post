import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css'
import Layout from './components/Layout';
import Posts from './components/Posts';

function App() {

  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Posts />} />
            <Route path='post'>
              <Route index element={<AddPostForm />} />
              <Route path=':postId' element={<SinglePostPage />} />
              <Route path='edit/:postId' element={<EditPostForm />} />
            </Route>

            {/* catch all - maybe replace with 404 component  */}
            {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
