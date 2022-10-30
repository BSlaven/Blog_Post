import React from 'react';

const ToolbarItem = ({ isactive, children }) => {

  console.log(isactive)
  
  return (
    <div className={`toolbar-item ${isactive === 'true' ? 'active' : null}`}>
      {children}
    </div>
  )
}

export default ToolbarItem