import React from 'react'

const PopupMessage = ({ success, message }) => {
  return (
    <p className={`popup-message ${success ? 'success' : 'error'}`}>
      {message}
    </p>
  )
}

export default PopupMessage