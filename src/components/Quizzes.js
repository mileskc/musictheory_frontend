import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
const Quizzes = (props) => {
  console.log(props.data)

  return (
    <div className="quizzes" >
      <Nav />
      <div id="quizlist-container" className="quiz-list">

        {props.data.length ? props.data.map(quiz =>
          <Link to={`/quizzes/${quiz.id}`}><h1 className="quiz-link">{quiz.title}</h1></Link>
        ) : null}
      </div>
    </div>
  )
}

export default Quizzes