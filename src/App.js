import React from 'react';
import TopMenuBar from './TopMenuBar';
import CodeEditorComponent from './CodeEditor';
import LeftNavBar from './LeftNavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopMenuBar />
      <div className="main-content">
        <LeftNavBar />
        <CodeEditorComponent />
      </div>
    </div>
  );
}

export default App;
