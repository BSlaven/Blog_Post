import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <nav>
        <ul>
          <li>
            <Link to="post">One post</Link>
          </li>
          <li>
            <Link to="/">All posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header