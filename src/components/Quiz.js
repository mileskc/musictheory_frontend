import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Quiz = () => {

const [data, setData] = useState({quizzes: []})


  useEffect (() => {
    const fetchData = async () => {
    const response = await axios('/quizzes/1', )
    setData(response.data)
    }
    fetchData();
  }, []);

return (
    <div className = "quiz">
        <h2>{data.title}</h2>
        <h3>{data.description}</h3>
        <img src ={data.img_url}/>
    </div>
)
}

export default Quiz