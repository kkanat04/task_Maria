import React from 'react';
import Search from '../Search/Search';
import './Main.css';

function Main() {
  return (
    <div className="main">
      <div>
        <h1 className="main__title">STAR WARS API</h1>
      </div>
      <div className="main__search">
        <Search />
      </div>
    </div>
  );
}

export default Main;
