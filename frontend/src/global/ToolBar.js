import React from 'react';
import 'remixicon/fonts/remixicon.css';


const ToolBar = ({openSidebar}) => {
    return (
        <div className="toolbar">
  <div className="burger" onClick={openSidebar}>
      <i className="ri-menu-fill"></i>
        </div>
        <div className="title">Menu
        </div>
        
        </div>
    )
}

export default ToolBar;