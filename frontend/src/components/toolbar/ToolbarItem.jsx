import React from 'react';

const ToolbarItem = ({ isactive, children }) => {
  return (
    <div className={`toolbar-item ${isactive ? 'active' : ''}`}>
      {children}
    </div>
  )
}

export default ToolbarItem