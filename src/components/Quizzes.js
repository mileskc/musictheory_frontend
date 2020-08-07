import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
const Quizzes = (props) => {
  // const [quizList, setQuizList] = useState([])
  console.log(props.data)

  return (
    <div className="quizzes" >
      <Nav />
      <div id="quizlist-container" className="quizList">

        {props.data.length ? props.data.map(quiz =>
          <Link to={`/quizzes/${quiz.id}`}><h1 className="quizLink">{quiz.title}</h1></Link>
        ) : null}
      </div>
    </div>
  )
}

export default Quizzes