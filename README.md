
# Prerequisites
 - Ruby -> ruby 2.6.3p62
 - Rails -> Rails 6.1.4.1
 

# Installation Instructions

1. Clone the repo locally on your machine
2. Two folders will appear: "chat-web-application" & "chat-web-api"
3. Open a terminal and navigate to the chat-web-api folder and run rails server > rails server
4. Change into the chat-web-application directory
5. Execute the command in your terminal > npm install
6. If you don't want to connect to the API then you can turn this off by going to "src/config.ts" and setting USE_API=false.
7. Execute the command in your terminal > npm start

# Running Tests
- Backend run command > rspec
- Front-end run command > npm run test


# Technologies Used

Front End - React, TypeScript, Jest for testing

Back End - Rails


# Requirements (Full Stack)
Front End:

1. As a User of the web-app, I can see a list of all the channels 
2. As a User of the web-app, I can joins channel and see the history of it

Back End:

1. As a consumer of API, I can persist my chat messages in specific channels I join
2. As a consumer of the API, I can see a list of all the available channels


# Why these features ?

I decided to choose features that I could integrate between the front-end and back-end without going over my feature limit for this assingment.

# Next steps & assumptions

Given I had more time I would have definitely liked to see all the features implemented. 

Assumptions made: I made the assumption that applying for the full-stack developer role that it would have made sense to connect my front-end to my api. 
