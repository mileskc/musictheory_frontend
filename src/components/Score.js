import React, { useEffect, useState } from 'react'
import Nav from './Nav'

const Score = (props) => {
  const [score, setScore] = useState(0)


  const getScore = () => {
    let result = localStorage.getItem('count')
    console.log(result)
    setScore(result)
  }
  useEffect(() => {
    getScore()
    window.scrollTo(0, 0)
  }, []);

  let params = props.match.params

  let data = {}
  console.log(data)
  data = props.data.find(quiz => quiz.id === parseInt(params.id))
  console.log(data)
  console.log(props.data)

  console.log(score)
  return (
    <div className="score">
      <Nav />
      <h1 className='score-showing'>Your score is {score}/5</h1>
      <h2>Correct Answers:</h2>
      <div className="question-key">
        {data && data.questions.map((question, index) => {
          let correctAnswer = question.answers.filter(answer => answer.is_correct === true);
          let questionNum = index + 1
          return (
            <div key={index}>
              <h3 className="question-key-list">Question {questionNum}</h3>
              <h2 className="correct-answers">{correctAnswer[0].content}</h2>
            </div>
          )

        }
        )}
      </div>
    </div >


  )
}

export default Score