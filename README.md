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

## Mock Data or Connec to API

If you want to just use the mock data, in the front-end go to src/config.ts and set
USE_API = false

## :school: Assignment Related Information

    Hello, If you're reading this then you're probably checking out the project! It was a great 
    experience in learning rails.  It's definitely an extremely opionionated framework to say 
    the least. An interesting takeaway for me from this project
    was the speed at which you can get a super functioning API up and running!

    The features I choose to implement into the project were features that were dependent upon
    one another so I could show them working in a Full Stack cohesively. All the features were 
    super interesting however I choose to stuck to the baiscs for this :)

    If I had more time I would have definitely been interested in implementing the AI chatbot.

    When making assumptions I did my best to use my understanding of the industry but also what is 
    expected in a take home programming assignment. I opted out not to include in any user authorization as the time 
    restraint on this project indicated to me that it would not be fesible in a fully testing manner if chosen to implement.

    Thank you for the opportunity and a chance to spend time on a new technology!

    - Adam Rodrigues

<a href="#top">Back to top</a>
