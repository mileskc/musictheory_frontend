import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import axios from 'axios'
let baseURL = process.env.REACT_APP_BASEURL

const Question = (props) => {

  // const [data, setData] = useState({})
  const [selectedOption1, setSelectedOption1] = useState(false)
  const [selectedOption2, setSelectedOption2] = useState(false)
  const [selectedOption3, setSelectedOption3] = useState(false)
  const [selectedOption4, setSelectedOption4] = useState(false)
  const [selectedOption5, setSelectedOption5] = useState(false)
  const [count, setCount] = useState(0)
  const [isScored, setIsScored] = useState(false)

  let params = props.match.params

  // console.log(props.data)
  // console.log(params.id)
  // let quizData = props.data.find(quiz => quiz.id === parseInt(params.id))
  // console.log(quizData)


  const toggleScored = () => {
    setIsScored(!isScored)
  }

  // const fetchData = async () => {
  //     const response = await axios.get(`${baseURL}/quizzes/${props.id}`)
  //     setData(response.data)
  // }

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
      <form
        className={isScored ? 'questionScored' : 'question'} onSubmit={handleFormSubmit}
      >
        {data && <div className="quizHeader">
          <h2 className="quizTitle">{data.title}</h2>
          <h3 className="quizDescription" >{data.description}</h3>
          <img className="quizImg" src={data.img_url} />
        </div>
        }
        <br />
        {data && data.questions.map((question, qindex) => {

          return (
            <div id={`question${qindex}`} className="questionBox">
              <h2 className="questionNumber">Question {qindex + 1}</h2>
              <img className="questionImg" src={question.img_url} />
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
        <button className="submit" onClick={() => toggleScored()} type="submit" value="Submit Answers and Get Score!">Submit Answers and Get Score!</button>
      </form>
      <h4 className={isScored ? 'scoreShowing' : 'score'}>Your Score is: {count}/5</h4>
      <div className={isScored ? 'scoreShowing questionKey' : 'score'}>
        <h6 className='correctAnswers'>Correct Answers:</h6>
        {data && data.questions.map((question, qindex) => {
          return (
            <div>
              <p className='questionKeyList'>Question {qindex + 1}</p>
              {question.answers.map((answer, index) => {
                return (
                  <div>
                    {
                      answer.is_correct ? <p className='answerKey'>{answer.content}</p> : null
                    }
                  </div>
                )
              })}
            </div>
          )
        })
        }
      </div>
      <br />
    </div>
  )
}

export default Question
