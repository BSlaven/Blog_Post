import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <nav>
        <li>
          <Link to="/post">One post</Link>
        </li>
        <li>
          <Link to="/">All posts</Link>
        </li>
      </nav>
    </header>
  )
}

export default Header