import React, {useState, useEffect} from 'react';
import Quiz from './components/Quiz'
import './App.css';
import axios from 'axios'

const App = () => {

  return (
    <div className="App">
      <header>
        <h1>Music Theory Quizzes</h1>
      </header>
      <h2 className="quiz1">Basic Intervals</h2>
      <Quiz/>
    </div>
  );
}

export default App;
