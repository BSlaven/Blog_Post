import React from 'react';
import { useSelector } from 'react-redux';

import { fetchRequestStatus } from '../store/slices/postsSlice';

const PopupMessage = ({ message }) => {

  const status = useSelector(fetchRequestStatus);
  console.log(status)
  const openClass = status === 'idle' ? '' : 'open' 
  const successClass = status === 'succeeded' ? 'success' : 'error';

  return (
    <p className={`popup-message ${openClass} ${successClass}`}>
      {message}
    </p>
  )
}

export default PopupMessage