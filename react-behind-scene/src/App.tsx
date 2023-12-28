import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { content } from './types/Content';
import { Tabbed } from './components/Tabbed';
// import { Content } from './types/Content';




function App() {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
}





export default App;
