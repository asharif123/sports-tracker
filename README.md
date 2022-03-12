# Sports Tracker


## Description
Sports tracker the application where sports fans can find, news, highlights, game scores, and horseracing information . Users have access to different sports, such as Soccer, Tennis Basketball, Ice Hockey, Volleyball, and Handball. An easy user friendly dashboard for fans to navigate as they search the latest on their favorite sports. 


Our motivation was to create a react application that would appeal to a sports fans. Utilizing react hooks and different components to render different sports data for our users . Our users can navigate to news articles or sports video highlights. They are also presented with a neat sports page layout. Our user authentication grants user access to see sports articles and highlight videos. 


- What problem does it solve?

We are using a few different APIs to fetch the data being displayed on the application. By building a full stack app and using react components the application back end functionality rendered the data from the api calls to the front end for our users to see and interact with. 
 


- What did you learn?

We learned how to use react for the front end and use node.js, express for the backend to create a fully functional single page application. Using SQL for our database we were able to create user authentication for the users to access the application information.  By using react router the user is presented with different pages,however it application not refreshed, creating a better user experience. 


## Table of Contents (Optional)
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- 
## Installation
The project was uploaded to GitHub at the following repository:  https://github.com/asharif123/rental-finder

You can access the deployed application with the Heroku link: 

To install the project follow these steps:

Clone the application from GitHub with:

git clone [clone link from GitHub]

From the root folder, install the dependencies with:

npm install

Run the app with:

npm run dev

After the installation is complete. 

Create database. This step can be done in your terminal or using a GUI. 

## Usage

This is the login. If The user exist they will have the option to login in or if they are a new user they will have the option to sign up
![This is an image](/sports-tracker-client/public/demo/loginpage.png)

Once the user is logged they will be presented with the homepage 
![This is an image](/sports-tracker-client/public/demo/Home-one.png)
The homepage has a sidebar presenting users with game scores
![This is an image](/sports-tracker-client/public/demo/Home-two.png)

The user can use the menu to navigate to highlights and news 
![This is an image](/sports-tracker-client/public/demo/navmenu.png)

When the user selects news they will be navigated the news page where they will have the option to select the sports article that appeals the user. 
![This is an image](/sports-tracker-client/public/demo/newspage.png)

When the user selects highlights they will be navigated to the highlights page and presented with option to view the highlights video.
![This is an image](/sports-tracker-client/public/demo/highlightspage.png)

Technology Utilized
Node.js
Express
React
React-Router
Flickity
SQL
React Bootstrap
Sass CSS

## React Hooks
The following React hooks were utilized:

- useState - used to record state changes of current value and updated value. This was used for the following features:

           1) To show loading icon before content loads on Home, Sports News, and Game Highlights webpages. webpages.
          
           2) To record when user is logged in or logged out.
           
           3) To make various API calls to load specific content on the Home, Sports News, and Game Highlights webpages.
           
           4) To load the sidebar containing links to Home, Logout, Sports News, and Game Highlights
           
- useEffect - used to eliminate side effect and print out data when webpage renders, mainly used for API calls. The following APIs utilized the useEffect hook:

           1) Sports Score Rapid API

           2) Horse Racing Rapid API

- useContext - used to gain access to global data and rerender webpages when the global data is changed. The following example was used in this project for useContext:

           1) Record when user logs in
           
           2) Record when user logs out and ensure user cannot see any webpages without logging in.

           3) Ensure that if user is logged in and refreshes, it will bring user back to the home page.
           
           4) If user is logged out and refreshes, the user will be redirected to the login page and is unable to see any webpage without logging in.

- useNavigate - used to navigate across different webpages. Mainly used to implement the following feature:

           1) If user is logged in or refreshes while logged in, useNavigate will automatically redirect to the homepage and if user logs out, user will be redirected to the login webpage.



## Credits
Developers:

Delmy Elias https://github.com/Dlelias
 
Mason Newell https://github.com/MasonNewell

Awad Sharif https://github.com/asharif123

Dustin Smith https://github.com/Interceptr83

Copyright (c) 2022

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
---
🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
