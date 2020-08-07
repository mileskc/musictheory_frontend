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
      <h1 className='scoreShowing'>Your score is {score}/5</h1>
      <h2>Correct Answers:</h2>
      <div className="questionKey">
        {data && data.questions.map((question, index) => {
          let correctAnswer = question.answers.filter(answer => answer.is_correct === true);
          let questionNum = index + 1
          return (
            <div>
              <h3 className="questionKeyList">Question {questionNum}</h3>
              <h2 className="correctAnswers">{correctAnswer[0].content}</h2>
            </div>
          )

        }
        )}
      </div>
    </div >


  )
}

export default Score