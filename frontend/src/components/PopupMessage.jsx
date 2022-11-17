import React from 'react';
import { useSelector } from 'react-redux';

import { fetchRequestStatus } from '../store/slices/postsSlice';

const PopupMessage = ({ message }) => {

  const status = useSelector(fetchRequestStatus);
  console.log(status)

  const success = false;
  
  return (
    <p className={`popup-message open ${success ? 'success' : 'error'}`}>
      {message}
    </p>
  )
}

export default PopupMessage