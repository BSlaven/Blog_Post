import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <Link to="/post">One post</Link>
      <Link to="/">All posts</Link>
    </header>
  )
}

export default Header