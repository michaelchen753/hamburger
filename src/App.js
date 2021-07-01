import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [isTrue, setIsTrue]= useState(true);
  const toggle = ()=> setIsTrue(!isTrue);
  return (
    <div className="App">
      <div class="container" onClick={toggle} >
        <div class={`bar1 ${isTrue? null: 'change-bar-1'}`}></div>
        <div class={`bar2 ${isTrue? null: 'change-bar-2'}`}></div>
        <div class={`bar3 ${isTrue? null: 'change-bar-3'}`}></div>
      </div>
    </div>
  );
}


