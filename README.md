<div align="center" id="top">

&#xa0;

</div>

<h1 align="center">Chat Application</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/arodrigues97/chat-application?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/arodrigues97/chat-application?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/arodrigues97/chat-application?color=56BEB8">

</p>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="https://github.com/arodrigues97" target="_blank">Author</a>
</p>

<br>

## :dart: About

Chat application is built with React, TypeScript, Semantic UI and Rails! The goal is to implement a small set of features of a basic chat room channel application
## :sparkles: Features

- :heavy_check_mark: Feature 1; "As a User of the web-app, I can see a list of all the channels"
- :heavy_check_mark: Feature 2; "As a User of the web-app, I can join a channel and see the history of it"
- :heavy_check_mark: Feature 3; "As a consumer of the API, I can see the list of all the available channels"
- :heavy_check_mark: Feature 4; "As a consumer of the API, I can persist messages in specific channels I join."

## :rocket: Technologies

The following tools were used in this project:

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Semantic UI](https://react.semantic-ui.com/)
- [Jest](https://jestjs.io/)
- [Axios](https://github.com/axios/axios)
- [Rails](https://github.com/rails/rails)
- [RSpec](https://github.com/rspec/rspec)

## :white_check_mark: Requirements

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com), [Node](https://nodejs.org/en/), [Ruby](https://www.ruby-lang.org/en/downloads/) and [Rails](https://github.com/rails/rails) installed

## :checkered_flag: Starting

```bash
# Clone this project
$ git clone https://github.com/arodrigues97/chat-application

# Access
$ cd chat-application
```

## :100: Back-End

```bash
# Access Back-End
$ cd chat-web-api

# Install gems
$ bundle install

# Migrate database
$ rails db:migrate

# Seed database
$ rails db:seed

# Run the rails server
$ rails server

# The server will initialize in the <http://localhost:3000>

# Testing
$ rspec

```

## :abc: Front-End

```bash
# Access Front-End
$ cd chat-web-app

# Load dependencies
$ npm install

# Run server
$ npm start

# Test Components
$ npm run test

# The server will initialize on the <http://localhost:3001>
```

## Postman Collection

Located in the chat-web-api folder is a file called "Chat-Api.postman_collection"

Feel free to import into Postman to have ready to go end points

## :school: Assignment 
  
  To example my knowledge and skills as a full stack developer I chose features dependant upon one another. I believe this highlights my ability to look at the whole picture of a problem set, integrate solutions, provide testing on both stacks and deliver a production ready piece of software. 
  
  Next steps for this project for me would be to implement user authentication and a socket connection to allow for implementation of real time updates to channel messages.
  
  When making assumptions for this assignment I took in a variety of different factors. The purpose of this assignment as I understand is to capture my ability to write well tested, readable, maintainable code all while under a unique time constraint. Due to this, I decided to omit user authentication/login. The API accepts user provided ids when making identity driven api requests, such as a "user persisting a message in a channel they have joined". Had this project been of a different scope I would have implemented authentication using JWT tokens for user identification. The front-end works on the assumption the user is logged in as user id 1, I decided to this would be best for testing. 
  
  The next assumption I had made for this assingment was the integration of the back-end to the front-end. It does not specify that as a fullstack candidate that you are to implement the stacks cohesively, however, assuming the role is full-stack I had assumed and preferred it would be best to do so. 
  
  It was a blast working on this project, I implemented a few extra features out of enjoyment of learning ruby, feel free to chime in on these or focus solely on the features stated in the  <a href="#sparkles-features">Features</a>&#xa0; part of this readme.
  
  Regards,
  
Adam Rodrigues :sunglasses:
  
  
<a href="#top">Back to top</a>
