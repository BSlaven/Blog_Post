import React from 'react';
import { useSelector } from 'react-redux';

import { fetchRequestStatus, fetchRequestMessage } from '../store/slices/postsSlice';

const PopupMessage = () => {

  const status = useSelector(fetchRequestStatus);
  const message = useSelector(fetchRequestMessage);
  
  const openClass = status === 'idle' ? '' : 'open' 
  const successClass = status === 'succeeded' ? 'success' : 'error';

  return (
    <p className={`popup-message ${openClass} ${successClass}`}>
      {message}
    </p>
  )
}

export default PopupMessage