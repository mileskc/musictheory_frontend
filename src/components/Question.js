import React, {useState, useEffect} from 'react'
import Answer from './Answer'
import Slider from "react-slick";
import axios from 'axios'

const Question = () => {

const [data, setData] = useState({quizzes: []})
// const [isFilled, setFilled] = useState(false)
const [selectedOption1, setSelectedOption1] = useState(false)
const [selectedOption2, setSelectedOption2] = useState(false)
const [selectedOption3, setSelectedOption3] = useState(false)
const [selectedOption4, setSelectedOption4] = useState(false)
const [selectedOption5, setSelectedOption5] = useState(false)
const [count, setCount] = useState(0)
const [checked, setChecked] = useState('')
let circleColor = 'blank'
// const[count, setCount] = useState(0)

// const toggleFilled = () => {
//     setFilled(!isFilled)
//     isFilled ?  circleColor = 'black' : circleColor = 'blank'
// }


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
    let val = event.currentTarget.value
    let option = event.currentTarget.name
    console.log(selectedOption1)
    console.log(selectedOption2)
    console.log(selectedOption3)
    console.log(selectedOption4)
    console.log(selectedOption5)

    switch (option) {
        case "option0":
            console.log("im the first quesion")
            console.log(val)
            
            if (val === 'true') {
                setCount(count + 1)
            } else if (val === 'false' && selectedOption1 !== 'false' && selectedOption1 !== false) {
                setCount(count - 1)
            } 
            setSelectedOption1(val)
            // selectedOption1 !=='false' ? setCount(count + 1) : setCount(count - 1);
            break
        case "option1":
            if (val === 'true') {
                setCount(count + 1)
            } else if (val === 'false' && selectedOption2 !== 'false' && selectedOption2 !== false) {
                setCount(count - 1)
            }
            setSelectedOption2(val)
            // val === 'true' ? setCount(count + 1) : setCount(count - 1);
            break
        case "option2":
            if (val === 'true') {
                setCount(count + 1)
            } else if (val === 'false' && selectedOption3 !== 'false' && selectedOption3 !== false) {
                setCount(count - 1)
            }
            setSelectedOption3(val)
            // val === 'true' ? setCount(count + 1) : setCount(count - 1);
            break
        case "option3":
            if (val === 'true') {
                setCount(count + 1)
            } else if (val === 'false' && selectedOption4 !== 'false' && selectedOption4 !== false) {
                setCount(count - 1)
            }
            setSelectedOption4(val)
            // val === 'true' ? setCount(count + 1) : setCount(count - 1);
            break
        case "option4":
            if (val === 'true') {
                setCount(count + 1)
            } else if (val === 'false' && selectedOption5 !== 'false' && selectedOption5 !== false) {
                setCount(count - 1)
            }
            setSelectedOption5(val)
            // val === 'true' ? setCount(count + 1) : setCount(count - 1);
            break
        

    }

    // option === "option0" && setSelectedOption1(val)
    // option === `option1` && setSelectedOption2(val)
    // option === `option2` && setSelectedOption3(val) 
    // option === `option3` && setSelectedOption4(val)
    // option === `option4` && setSelectedOption5(val)

    
    // selectedOption2 === 'true' ? setCount(count + 1) : setCount(count - 1);
    // selectedOption3 === 'true' ? setCount(count + 1) : setCount(count - 1);
    // selectedOption4 === 'true' ? setCount(count + 1) : setCount(count - 1);
    // selectedOption5 === 'true' ? setCount(count + 1) : setCount(count - 1);

    console.log({selectedOption1})
    console.log({selectedOption2})
    console.log({selectedOption3})
    console.log({selectedOption4})
    console.log({selectedOption5})
    }

const handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    // console.log({selectedOption})

    // selectedOption1 === 'true' ? setCount(count + 1) : setCount(count - 1);
    // selectedOption2 === 'true' ? setCount(count + 1) : setCount(count - 1);
    // selectedOption3 === 'true' ? setCount(count + 1) : setCount(count - 1);
    // selectedOption4 === 'true' ? setCount(count + 1) : setCount(count - 1);
    // selectedOption5 === 'true' ? setCount(count + 1) : setCount(count - 1);

    console.log(count)
    
    // console.log(`${formSubmitEvent.currentTarget.id} is ${selectedOption}`)
    // console.log(count)
}


return (
    <div className = "question">
        <form className="answer" onSubmit={handleFormSubmit}>
          { 
              data.questions &&
              
            data.questions.map( (question, qindex) => {
              return(
                <div id={`question${qindex}`} className="questionBox">
                    <h2>Question {qindex + 1}</h2>
                    <img className ="questionImg" src ={question.img_url}/>
                    <h2>{question.instructions}</h2>
                    {<p>{count}</p>}
                    {question.answers.map( (answer, index )=> {
                        // console.log(answer.is_correct)
                        return (
                            <label>
                                <input 
                                onChange={handleOptionChange}
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
                    <br/>
                </div>
              )
          })
          }
            <br/>
            <input type="submit" value ="Submit Answers and Get Score!"/>
        </form>
          
          
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
