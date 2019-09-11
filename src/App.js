import React, {useState, useEffect} from 'react';
import Quiz from './components/Quiz'
import Question from './components/Question'
import Slider from "react-slick";
import './App.css';
import axios from 'axios'

const App = () => {
  const [isShowing, setIsShowing] = useState(false)
  const [data, setData] = useState({quizzes: []})

  const toggleQuiz = () => {
    setIsShowing(!isShowing)
  }

  useEffect (() => {
    const fetchData = async () => {
    const response = await axios('/quizzes/1', )
    setData(response.data)
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Music Theory Quizzes</h1>
      </header>
      {/* {!isShowing? <h2 onClick={()=>toggleQuiz()} className="quiz1">Basic Intervals</h2> : null} */}
      <h2 onClick={()=>toggleQuiz()} className="quiz1">Basic Intervals</h2>
      {isShowing ? <Quiz/> : null}
      {/* <Slider> */}
        {/* <div>
          { data.questions &&
            data.questions.map(question => {
              return(
                <Question/>
              )
          })
          }
        </div> */}
      {/* </Slider> */}
      
      {/* <Quiz/> */}
    </div>
  );
}

export default App;
