import React, { useEffect, useState } from 'react'

const Score = () => {
  const [score, setScore] = useState(0)
  const getScore = () => {
    let result = localStorage.getItem('count')
    console.log(result)
    setScore(result)
  }
  useEffect(() => {
    getScore()
  }, []);

  console.log(score)
  return (
    <div>
      <h1>Your score is {score}/5</h1>
    </div>
  )
}

export default Score