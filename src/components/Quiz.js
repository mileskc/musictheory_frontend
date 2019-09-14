import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Question from './Question'
import axios from 'axios'

const Quiz = ({match}) => {

const [data, setData] = useState({quizzes: []})
console.log(match.params.id)


  useEffect (() => {
    const fetchData = async () => {
        // if (path === '/Quiz1') {
        //     const response = await axios(`/quizzes/1`, )
        // } else if (path === '/Quiz2') {
        //     const response = await axios(`/quizzes/2`, )
        // }
    const response = await axios(`/quizzes/${match.params.id}`, )
    
    setData(response.data)
    }
    fetchData();
  }, []);

return (
    <div className = "quiz">
        {/* <h2>{data.title}</h2> */}
        <h3>{data.description}</h3>
        <img className="quizImg" src ={data.img_url}/>
        <br/>
        
            {/* <Question test={'test1'}/> */}
        
        {/* <button>Begin Quiz!</button> */}
    </div>
)
}

export default Quiz