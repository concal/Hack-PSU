OVERVIEW: 
This website provides a forum in which all Penn State Students can communicate with each other about club events and hangout sessions. 

It uses React, Css, Javascript, and MongoDB to keep track of entities such as Users, Events, and Clubs. 

Events (which can be unofficial or official) are easily accessed on the home page, but logging in with a created account gives you the ability to create events, add clubs, and favorite events that interest you with a single click.

    Events include information such as start time, end time, location, sponsor, and a general description. It also has a uniquely generated eventID.

    User Profiles include information such as name, username/email, and password. They also hold of list of favorited events.
    
    Clubs include information such as category, name, and description. It also has a uniquely generated clubID.

INTEGRATION:
This application is built using a techstack with the following:

    Databse: MongoDB with NoSQL

    Backend: JavaScript using Express.js and Node.js

    Frontend: JavaScript using React

TESTING:
Run this project locally by using the following commands:

    npm update
    npm start
    cd backend
    nodemon index.js

This will run the frontend on port 3000, and backend on port 5000.