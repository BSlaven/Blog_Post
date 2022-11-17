import React from 'react';
import { Link } from 'react-router-dom';

import PopupMessage from './PopupMessage';

const Header = () => {

  return (
    <header className='header'>
      <PopupMessage message={'može li ova poruka'} />
      <nav>
        <ul>
          <li>
            <Link className='nav-link' to="/">home</Link>
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