import React from 'react';
import './LeftNavBar.css';
import Dropdown from './Dropdown';

const LeftNavBar = () => {
  const codeList = ['Api-1', 'Api-2', 'Api-3'];

  return (
    <div className="left-nav-bar">
      {codeList.map((code, index) => (
        <div key={index} className="code-item">
           <Dropdown api={code}/>
        </div>
      ))}
    </div>
  );
};

export default LeftNavBar;
