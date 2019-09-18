# Beyond Measure

## Description:
Beyond Measure is a resource for musicians to test their baseline theory knowledge. It provides short multiple choice quizzes based on images of staffs and returns the user's score along with the correct answers after the answers have been submitted.

## Live Link: 
https://beyond-measure.netlify.com/

## Languages Used:
* HTML
* CSS
* JavaScript
* Ruby

## Technologies Used:
* Rails
* PostgreSQL
* React
* Node.js

## Approach Taken:
Beyond Measure was built by creating 2 separate Github repositories - one for the front and and one for the backend. The backend was built with Rails and Postgres with three models connected in nested one-to-many relationships. 

The front end was created using React. React Router was implemented in order to direct the page to the selected quiz. The quiz component uses an axios call to get the data from the back end. It loops through each question and the corresponding answers in order to display them on the page. As the user selects each response from the multiple choice options, a count variable is increased depending on whether or not the answer is correct. Once the user submits their responses, the resulting score displays on the page along with the correct answers.


## Screenshot of App:
![Site Screenshot](https://github.com/mileskc/musictheory_frontend/blob/master/images/Beyond%20Measure%20Screenshot.png)

