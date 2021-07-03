# MERN + Redux App Template

## Installation Instructions

Fork and clone the repo to your machine.

```bash
npm install
cd client && npm install
```
Create a .env file in the root level, using example.env as a model. Add in your MongoDB Atlas connection string to your database

If you won't have users in your database, you may delete the userModel file in the models folder, and the authMiddleware in the middleware folder.