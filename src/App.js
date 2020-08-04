import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom"
import axios from 'axios'
import Question from './components/Question'
import Quizzes from './components/Quizzes'
import Home from './components/Home'
import './App.css';
let baseURL = process.env.REACT_APP_BASEURL

const App = () => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const response = await axios.get(`${baseURL}/quizzes`)
    if (response.data.length > 0) {
      setData(response.data)
    }
  }
  useEffect(() => {


    fetchData();
  }, []);

  return (
    <div className="App">

      <Switch>
        <Route exact path="/" render={() =>
          <Home data={data} />} />
        <Route exact path="/quizzes" render={(props) =>
          <Quizzes data={data} {...props} />} />
        <Route exact path="/quizzes/:id" render={(props) => <Question data={data}{...props} />} />
      </Switch>


    </div>

  );

}


export default App;
