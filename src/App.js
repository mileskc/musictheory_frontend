import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
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

  // useEffect ((props) => {
  //   const fetchData = async () => {
  //   const response = await axios('/quizzes/1', )
  //   setData(response.data)
  //   }
  //   fetchData();
  // }, []);

  return (
    <div className="App">
        <Router>
        <header>
        <Link to="/">Music Theory Quizzes</Link>
          <div className = "container">
            <nav>
              <Link to="/quiz/1">Quiz 1</Link>
              <Link to="/quiz/2">Quiz 2</Link>
              <Link to="/quiz/3">Quiz 3</Link>
            </nav>
            {/* <Route path="/Quiz1" component={Quiz} /> */}
            <Switch>
              <Route path="/quiz/:id" component={Question} />
              {/* <Route path="/count" component={Answer}/> */}
            </Switch>
          </div>
      </header>
        {/* <Link to='/count'>Submit Answers and Get Score!</Link> */}
      </Router>
      {/* {!isShowing? <h2 onClick={()=>toggleQuiz()} className="quiz1">Basic Intervals</h2> : null} */}
      {/* <h2 onClick={()=>toggleQuiz()} className="quiz1">{data.title}</h2>
      {isShowing ? <Quiz/> : null} */}
    
        {/* <div>
          { data.questions &&
            data.questions.map(question => {
              return(
                <Question/>
              )
          })
          }
        </div> */}

    
    </div>
  );
}

export default App;
