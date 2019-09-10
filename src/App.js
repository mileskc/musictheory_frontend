import React, {useState, useEffect} from 'react';
import Quiz from './components/Quiz'
import Question from './components/Question'
import './App.css';
import axios from 'axios'

const App = () => {

  const [isShowing, setIsShowing] = useState(false)

  const toggleQuiz = () => {
    setIsShowing(!isShowing)
  }

  return (
    <div className="App">
      <header>
        <h1>Music Theory Quizzes</h1>
      </header>
      {/* {!isShowing? <h2 onClick={()=>toggleQuiz()} className="quiz1">Basic Intervals</h2> : null} */}
      <h2 onClick={()=>toggleQuiz()} className="quiz1">Basic Intervals</h2>
      {isShowing ? <Quiz/> : null}

      <Question/>
      
      {/* <Quiz/> */}
    </div>
  );
}

export default App;
