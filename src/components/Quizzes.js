import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Quizzes = (props) => {
  // const [quizList, setQuizList] = useState([])
  console.log(props.data)
  // console.log(quizList)

  // const setData = () => {
  //   if (props.data.length > 0) {
  //     setQuizList(props.data)

  //   }

  // }
  // useEffect(async () => {
  //   await setData()
  // }, []);



  return (
    <>
      <div className="quizList">
        {props.data.length ? props.data.map(quiz =>
          <Link to={`/quizzes/${quiz.id}`}><h1>{quiz.title}</h1></Link>
        ) : null}

        {/* <Link to="/quiz/1" className="quizLink" label='Basic Intervals'>Basic Intervals</Link>
      <Link to="/quiz/2" className="quizLink" label='Triad Chords'>Triad Chords</Link>
      <Link to="/quiz/3" className="quizLink">Key Signatures</Link> */}
      </div>
    </>
  )
}

export default Quizzes