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

Bar None was built by creating 2 separate Github repositories - one for the front and and one for the backend. Once the backend was built out and tested by curling the routes in the terminal, the front end react app was fleshed out. The site began with rendering seed data for popular cocktails. Once the cocktails were rendered, the app was developed into full CRUD by allowing users to add their own cocktails and delete any cocktails added to the database. When a user clicks on a cocktail, a modal appears with information about that particular cocktail. Within this show page users are also able to mark a cocktail within the database as a favorite. A star will then appear on the corresponding card for that cocktail. 

In addition to the information in the database, Bar None accesses a 3rd party API, TheCocktailDB, to allow users to search for cocktails for inspiration. Users are able to search by name, ingredient, or click a button to retrieve a random cocktail from the API.

## Screenshot of App:
![Site Screenshot](https://github.com/mileskc/musictheory_frontend/blob/master/images/Beyond%20Measure%20Screenshot.png)

