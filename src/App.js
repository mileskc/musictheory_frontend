import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import { SideNav, SideNavItem, Button } from 'react-materialize';
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
        <Router>
        <header>
          <Link to="/" className="siteTitle">Music Theory Quizzes</Link>
        </header>
          <div className = "container">
            <div className ='navButton'>
            <SideNav trigger={<Button waves="light">Quizzes</Button>} options={{closeOnClick: true}}>
              <SideNavItem href="#!icon"><Link to="/quiz/1" className = "quizLink" label='Basic Intervals'>Basic Intervals</Link></SideNavItem>
              <SideNavItem href="#!second"><Link to="/quiz/2" className = "quizLink" label='Triad Chords'>Triad Chords</Link></SideNavItem>
              <SideNavItem waves href="#!third"><Link to="/quiz/3" className = "quizLink">Quiz 3</Link></SideNavItem>
            </SideNav>
            
            </div>
            {/* <Route path="/Quiz1" component={Quiz} /> */}
            <Switch>
              <Route path="/quiz/:id" component={Question} />
              {/* <Route path="/count" component={Answer}/> */}
            </Switch>
          </div>
      
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
