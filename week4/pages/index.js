import React from 'react';

const Index = () => {
    const btnName = "등록"
  return (<div>
    
    <h1>Main</h1>
    <ul>
        <li><a href='/about'>about</a></li>
    </ul>
    <div>
            <h2>Welcome</h2>
            <h4>create account</h4>
            <input/>
            <button>{btnName}</button>
        </div>
  </div>);
};

export default Index;
