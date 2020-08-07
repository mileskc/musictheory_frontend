import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'


const Quiz = (props) => {

  const [selectedOption1, setSelectedOption1] = useState(false)
  const [selectedOption2, setSelectedOption2] = useState(false)
  const [selectedOption3, setSelectedOption3] = useState(false)
  const [selectedOption4, setSelectedOption4] = useState(false)
  const [selectedOption5, setSelectedOption5] = useState(false)
  const [count, setCount] = useState(0)

  let params = props.match.params

  const submitScore = () => {
    localStorage.setItem('count', count.toString())
    const score = localStorage.getItem('count')
    console.log(score)

  }

  let data = {}
  console.log(data)
  console.log(props.quizData)
  data = props.data.find(quiz => quiz.id === parseInt(params.id))
  console.log(data)
  console.log(props.data)


  useEffect(() => {

  }, []);

  const handleOptionChange = event => {
    let val = event.currentTarget.value
    let option = event.currentTarget.name

    switch (option) {
      case "option0":
        if (val === 'true') {
          setCount(count + 1)
        } else if (val === 'false' && selectedOption1 !== 'false' && selectedOption1 !== false) {
          setCount(count - 1)
        }
        setSelectedOption1(val)
        break
      case "option1":
        if (val === 'true') {
          setCount(count + 1)
        } else if (val === 'false' && selectedOption2 !== 'false' && selectedOption2 !== false) {
          setCount(count - 1)
        }
        setSelectedOption2(val)
        break
      case "option2":
        if (val === 'true') {
          setCount(count + 1)
        } else if (val === 'false' && selectedOption3 !== 'false' && selectedOption3 !== false) {
          setCount(count - 1)
        }
        setSelectedOption3(val)
        break
      case "option3":
        if (val === 'true') {
          setCount(count + 1)
        } else if (val === 'false' && selectedOption4 !== 'false' && selectedOption4 !== false) {
          setCount(count - 1)
        }
        setSelectedOption4(val)
        break
      case "option4":
        if (val === 'true') {
          setCount(count + 1)
        } else if (val === 'false' && selectedOption5 !== 'false' && selectedOption5 !== false) {
          setCount(count - 1)
        }
        setSelectedOption5(val)
        break


    }

  }

  const handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
  }


  return (
    <div className="quiz">
      <Nav />
      <form
        className={'question'} onSubmit={handleFormSubmit}
      >
        {data && <div className="quiz-header">
          <h2 className="quiz-title">{data.title}</h2>
          <h3 className="quiz-description" >{data.description}</h3>
          <img className="quiz-img" src={data.img_url} />
        </div>
        }
        <br />
        {data && data.questions.map((question, qindex) => {

          return (
            <div id={`question${qindex}`} className="question-box">
              <h2 className="question-number">Question {qindex + 1}</h2>
              <img className="question-img" src={question.img_url} />
              <h2 className="instructions">{question.instructions}</h2>
              {question.answers.map((answer, index) => {
                return (
                  <p>
                    <label>
                      <input
                        onChange={handleOptionChange}
                        index={index}
                        type="radio"
                        name={`option${qindex}`}
                        value={answer.is_correct}
                      />
                      <span>{answer.content}</span>
                    </label>
                  </p>
                )
              })}
              <br />
            </div>
          )
        })}
        <br />
        <Link to={`/score/${params.id}`}><button className="submit" onClick={() => submitScore()} type="submit" value="Submit Answers and Get Score!">Submit Answers and Get Score!</button></Link>
      </form>
      <br />
    </div>
  )
}

export default Quiz
