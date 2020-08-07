import React from 'react'
import { Parallax } from 'react-materialize';
import { Link } from 'react-router-dom'
import Nav from './Nav'

const Home = () => {
  return (
    <>
      <Parallax image={<img src='https://images.unsplash.com/photo-1453906971074-ce568cccbc63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' />} />
      <div className="section white">
        <div className="row container">
          <div className="container">
            <Nav />
          </div>
          <header>
            <h2 className="header">
              <Link to="/" className="site-title">Beyond Measure</Link>
            </h2>
          </header>
          <br />
          <p className="grey-text text-darken-3 lighten-3">
            Welcome to Beyond Measure! Test your baseline music theory knowledge with these short quizzes to let you know which areas you need to improve! This site employs some abbreviations, so for those who are unsure about some of the answer options, check out the key below.</p>
          <p className="grey-text text-darken-3 lighten-3 abbreviations">
            m = minor
              <br />
              min = minor
              <br />
              M = Major
              <br />
              Maj = Major
              <br />
              Aug = Augmented
              <br />
              dim = Diminished
            </p>
        </div>
      </div>
      <Parallax image={<img src="https://images.unsplash.com/photo-1542120526-89a7039730ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80" />} />
    </>
  )
}

export default Home