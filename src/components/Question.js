import React, {useState, useEffect} from 'react'
import Answer from './Answer'
import axios from 'axios'

const Question = () => {

const [data, setData] = useState({quizzes: []})


  useEffect (() => {
    const fetchData = async () => {
    const response = await axios('/quizzes/1', )
    // console.log(response.data.questions[0].instructions)
    setData(response.data)
    console.log(response.data);
}
    fetchData();
  }, []);


return (
    <div className = "question">
        <div>
          { data.questions &&
            data.questions.map(question => {
              return(
                <div className="questionBox">
                    <img className ="questionImg" src ={question.img_url}/>
                    <h2>{question.instructions}</h2>
                    {question.answers.map(answer => {
                        return (
                            <h3>{answer.content}</h3>
                        )
                    })}
                    {/* <Answer/> */}
                </div>
              )
          })}
          
        </div>
        {/* {
            data.questions &&
            <div className="questionBox">
                <img className ="questionImg" src ={data.questions[0].img_url}/>
                <h2>{data.questions[0].instructions}</h2>
            </div>
        } */}
        
        <br/>
        <button>Submit Answers</button>
    </div>
)
}

export default Question