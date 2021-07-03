# MERN + Redux App Template

## Description
This is free to use for anyone needing to build a full-stack MERN app with Redux for state management on the frontend. It comes with a User model pre-loaded, as well as auth and error middleware functions. It uses jsonwebtokens to authenticate the user. You need to decide how you want to store the token on the frontend. 

You'll need to have a MongoDB Atlas account, with a database created.

## Installation Instructions

Clone the repo to your machine.

Navigate into the cloned project:
```bash
cd mern-redux-template
```
Update the remote origin to your own blank repo:
```bash
git remote set-url origin new.git.url/here
```
Install dependences in both root level and client folder:
```bash
npm install
cd client && npm install
```
Create a .env file in the root level, using example.env as a model. Add in your MongoDB Atlas connection string to your database

If you won't have users in your database, you may delete the userModel file in the models folder, and the authMiddleware in the middleware folder.