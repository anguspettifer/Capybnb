# Heroku deployment - a partial how to

[Getting started documentation](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)

1. Heroku uses Node.js for the back end app
    * - Difference between javascript and node js
        * Javascript is a language
        * Node.js is an interpreter and environment
        * This includes libraries
        * Node runs the same interpreter as chrome (v8)
        * Includes package manager system (NPM) - like bundle
2. Getting started - you need to have latest version of Node.js, latest version of nom, and download and install Heroku for the command line. Heroku set up page guides you through some basic commands to check that it is all installed correctly.
3. You need to have a git repository ready to deploy.
4. CD to the repository you want to deploy. Heroku has a built in command for deploying the app ```heroku create``` in the command line with a
5. You will be returned with a live URL | git heroku repo that you deployed
6. To choose a specific Url ```heroku create words you want in the url```
7. Click on the URL to see some sort of landing page
8. You the push the code from your local repo to the new heroku git repo.
9. You Need to have a Procfile that tells heroku how to run the app. This is a text file that declares the specific command to launch the page.

[How to get started with Node.js](https://nodejs.org/en/docs/guides/getting-started-guide/)
