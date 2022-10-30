import React from 'react'

import { inlineStyles } from './inlineStyles';

const InlineStylesComponent = () => {
  return (
    <div className='inline-styles-container'>
      {inlineStyles.map((elem, index) => (
        <p>{`SB-${index}`}</p>
      ))}
    </div>
  )
}

export default InlineStylesComponent;