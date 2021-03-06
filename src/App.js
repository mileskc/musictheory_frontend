import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom"
import axios from 'axios'
import Quiz from './components/Quiz'
import Quizzes from './components/Quizzes'
import Home from './components/Home'
import Score from './components/Score'
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
    <div className="app">

      <Switch>
        <Route exact path="/" render={() =>
          <Home data={data} />} />
        <Route exact path="/quizzes" render={(props) =>
          <Quizzes data={data} {...props} />} />
        <Route exact path="/quizzes/:id" render={(props) => <Quiz data={data}{...props} />} />
        <Route exact path="/score/:id" render={(props) => <Score data={data}{...props} />} />

      </Switch>


    </div>

  );

}


export default App;
