import React, {useState, useEffect} from 'react'
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
        {/* <img src ={data.questions.img_url}/> */}
        {/* <h2>{Object.keys(data)}</h2> */}

        {
            data.questions &&
            <h2>{data.questions[0].instructions}</h2>
        }


        {/* <h3>{data.questions[0].answers[0].content}</h3> */}
        {/* <h5>{data.props.description}</h5> */}
        <br/>
        <button>Next Question</button>
    </div>
)
}

export default Question