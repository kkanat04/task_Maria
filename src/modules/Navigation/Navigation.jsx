import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../../components/Main/Main';
import List from '../../components/List/List';

function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/results/:label/search=:params" element={<List />} />
    </Routes>
  );
}

export default Navigation;
