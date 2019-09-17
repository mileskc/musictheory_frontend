import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import { SideNav, SideNavItem, Button, Parallax, Select, Navbar, NavItem, Dropdown, Divider} from 'react-materialize';
import Navigation from 'react-toolbox/lib/navigation';
// import Link from 'react-toolbox/lib/link';
// import Quiz from './components/Quiz'
import Question from './components/Question'
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
      <Parallax image={<img src='https://images.unsplash.com/photo-1453906971074-ce568cccbc63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' />} />
        <Router>
      <div className="section white">
        <div className="row container">
          <header>
          <h2 className="header">
            <Link to="/" className="siteTitle">Beyond Measure</Link>
          </h2>
          </header>
          <br/>
          <p className="grey-text text-darken-3 lighten-3">
            Welcome to Beyond Measure! Test your baseline music theory knowledge with these short quizzes to let you know which areas you need to improve! This site employs some abbreviations, so for those who are unsure about some of the answer options, check out the key below.</p>
          <p className="grey-text text-darken-3 lighten-3 abbreviations">
            m = minor
            <br/>
            min = minor
            <br/>
            M = Major
            <br/>
            Maj = Major
            <br/>
            Aug = Augmented
            <br/>
            dim = Diminished
          </p>

            <div className = "container">
              <div className ='navButton'>
                <h3>Quizzes</h3>
                <Link to="/quiz/1" className = "quizLink" label='Basic Intervals'>Basic Intervals</Link>
                <Link to="/quiz/2" className = "quizLink" label='Triad Chords'>Triad Chords</Link>
                <Link to="/quiz/3" className = "quizLink">Key Signatures</Link>
              </div>
              <Route>
                <Route exact path="/quiz/1" render={ () => <Question id="1" /> } />
                <Route exact path="/quiz/2" render={ () => <Question id="2" />} />
                <Route exact path="/quiz/3" render={ () => <Question id="3" />} />
              </Route>
        
          </div>
      </div>
    </div>
  <Parallax image={<img src="https://images.unsplash.com/photo-1542120526-89a7039730ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80" />} />
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

    </Router>
    </div>
    
  );
  
}


export default App;
