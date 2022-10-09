import React from 'react';
import { Link } from 'react-router-dom';
import PostPage from '../components/PostPage';
import Posts from '../components/Posts';

const Header = () => {
  return (
    <header className='header'>
      <Link to="/post" element={<PostPage />}>One post</Link>
      <Link to="/" element={<Posts />}>All posts</Link>
    </header>
  )
}

export default Header