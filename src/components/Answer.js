import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Answer = () => {

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
    <div className = "answer">
        {
            data.questions &&
            <div className="answerBox">
                {
                    data.questions.map(question => {
                        return(
                    
                    question.answers.map(answer => {
                        return (
                            <h3>{answer.content}</h3>
                        )
                    })
                    )
                })
                }
                {/* <h3>{data.questions[0].answers[0].content}</h3> */}
            </div>
        }
        {/* {
            data.questions &&
            <div className="answerBox">
                {
                    data.questions[0].answers.map(answer => {
                        return (
                            <h3>{answer.content}</h3>
                        )
                    })
                }
                <h3>{data.questions[0].answers[0].content}</h3>
            </div>
        } */}
    </div>
)
}

export default Answer