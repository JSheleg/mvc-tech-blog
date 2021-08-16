# MVC Tech Blog ![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)

## Description: 
This project uses the Model-View-Controller(MVC) paradigm to create a blog site. On the site, users can view tech blogs, create an account, create/edit/delete blog posts and comment on posts the belong to both themselves but other users as well. 

## Table of Contents:

* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Installation](#installation)
* [Instructions](#instructions)
* [Technology](#technology)
* [License](#license)
* [Questions](#questions)
* [Walk Through](#walk-through)

## User Story:
    AS A developer who writes about tech
    I WANT a CMS-style blog site
    SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Acceptance Criteria: 
    GIVEN a CMS-style blog site
    WHEN I visit the site for the first time
    THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
    WHEN I click on the homepage option
    THEN I am taken to the homepage
    WHEN I click on any other links in the navigation
    THEN I am prompted to either sign up or sign in
    WHEN I choose to sign up
    THEN I am prompted to create a username and password
    WHEN I click on the sign-up button
    THEN my user credentials are saved and I am logged into the site
    WHEN I revisit the site at a later time and choose to sign in
    THEN I am prompted to enter my username and password
    WHEN I am signed in to the site
    THEN I see navigation links for the homepage, the dashboard, and the option to log out
    WHEN I click on the homepage option in the navigation
    THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
    WHEN I click on an existing blog post
    THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
    WHEN I enter a comment and click on the submit button while signed in
    THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
    WHEN I click on the dashboard option in the navigation
    THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
    WHEN I click on the button to add a new blog post
    THEN I am prompted to enter both a title and contents for my blog post
    WHEN I click on the button to create a new blog post
    THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
    WHEN I click on one of my existing posts in the dashboard
    THEN I am able to delete or update my post and taken back to an updated dashboard
    WHEN I click on the logout option in the navigation
    THEN I am signed out of the site
    WHEN I am idle on the site for more than a set time
    THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

## Installation
Note: This project is hosted on Heroku at https://secret-forest-08494.herokuapp.com/

If you wish to run this code locally:
* clone repo from GitHub and run `git clone <url copied from respository>`
* run `npm install`
* run `mysql -u root -p` && `source db/schema.sql` && `npm run seeds` to set up, seed and run the database
* run `npm start` to start the server

Note: A problem I faced when pushing it up to Heroku is the throwing of errors stating that the database didn't exist. I found that by pushing the code to heroku the first time with the sequelize.sync force set to true, it would set up the database. Then run the seeds and set the force back to false. Then push it to heroku and will be seeded and functional.

## Technology

* JavaScript
* Node.js
* Express.js
* Dotenv (stores environment(.env) files.)
* MySql
* Sequelize
* Bycrypt
* Handlebars
* Heroku with assistance from JawsDB

## License

This project is licensed under MIT

## Questions

* Created by Jessica Sheleg
* [Project Repository](https://github.com/JSheleg/mvc-tech-blog)
* [GitHub Portfolio](https://github.com/JSheleg)

## Walk Through

* Local Machine: [Local_Machine_WalkThrough]()
* Heroku: [App on Heroku]()
