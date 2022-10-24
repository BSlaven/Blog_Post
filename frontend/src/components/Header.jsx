import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <nav>
        <ul>
          <li>
            <Link className='nav-link' to="/">All posts</Link>
          </li>
          <li>
            <Link className='nav-link' to="new">New Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header