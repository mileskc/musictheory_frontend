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
    <div className = "quiz">
        {
            data.questions &&
            <div className="quizBox">
                <img src ={data.questions[0].img_url}/>
                <h2>{data.questions[0].instructions}</h2>
            </div>
        }
        <Answer/>
        <br/>
        <button>Next Question</button>
    </div>
)
}

export default Question