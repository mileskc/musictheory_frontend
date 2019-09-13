import React, {useState, useEffect} from 'react'
import Answer from './Answer'
import Slider from "react-slick";
import axios from 'axios'

const Question = () => {

const [data, setData] = useState({quizzes: []})
const [isFilled, setFilled] = useState(false)
const [selectedOption, setSelectedOption] = useState(false)
const [count, setCount] = useState(0)
const [checked, setChecked] = useState('')
let circleColor = 'blank'
// const[count, setCount] = useState(0)

const toggleFilled = () => {
    setFilled(!isFilled)
    isFilled ?  circleColor = 'black' : circleColor = 'blank'
}


  useEffect (() => {
    const fetchData = async () => {
    const response = await axios('/quizzes/1', )
    // console.log(response.data.questions[0].instructions)
    setData(response.data)
    console.log(response.data);
}
    fetchData();
  }, []);

// handleOptionChange = event => {
// [event.currentTarget.id]:event.target.value
// }

const handleOptionChange = event => {
    console.log(event.target.value)
    setSelectedOption(event.target.value)
    console.log({selectedOption})
    }

const handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    // console.log({selectedOption})

    // {selectedOption ? setCount(count + 1) : null
    // console.log(`${formSubmitEvent.currentTarget.id} is ${selectedOption}`)
    // console.log(count)
}


return (
    <div className = "question">
        <div>
        <form className="answer">
          { 
              data.questions &&
              
            data.questions.map( (question, qindex) => {
              return(
                <div id={`question${qindex}`} className="questionBox">
                    <h2>Question {qindex + 1}</h2>
                    <img className ="questionImg" src ={question.img_url}/>
                    <h2>{question.instructions}</h2>
                    {question.answers.map( (answer, index )=> {
                        // console.log(answer.is_correct)
                        return (
                            <label>
                                <input 
                                onClick={handleOptionChange}
                                index={index} 
                                type="radio" 
                                name={`option${qindex}`} 
                                // checked={setChecked(`option${index}`)}
                                value={answer.is_correct}
                                /> 
                                {answer.content}
                            </label>
                        )
                    })
                    }
            
                    {/* <Answer/> */}
                </div>
              )
          })
          
          }
            <br/>
            <input type="submit" onSubmit={() => handleFormSubmit()}/>
        </form>
          
          
        </div>
        {/* {
            data.questions &&
            <div className="questionBox">
                <img className ="questionImg" src ={data.questions[0].img_url}/>
                <h2>{data.questions[0].instructions}</h2>
            </div>
        } */}
        
        <br/>
    </div>
)
}

export default Question


{/* <div onClick={()=>toggleFilled()} className={circleColor}>.</div> */}