import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>

      <div className="nav" >
        <div className="logo-container">
          <Link to='/'><img className="logo" src="https://i.imgur.com/BoTe4sD.png" /></Link>
        </div>
        <div className='nav-button'>
          <Link to='/quizzes'><h3 className="quiz-list">Quizzes</h3></Link>
        </div>
        <div className='right-container'>

        </div>
      </div >
    </>
  )
}

export default Nav