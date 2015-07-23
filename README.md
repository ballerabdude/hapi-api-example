#Node Api using the [hapi](https://github.com/hapijs/hapi) framework
####This Api is using io.js which is node you can read more about node and iojs from [here](http://www.infoq.com/news/2015/05/nodejs-iojs)
This api is built with ES6 using iojs <b>without any flags</b> some some es6 features were not available to me but I will update as soon as iojs is updated with the latest es6 syntax.

#####To run the sample you will need to create a MongoDB database and the information you need should be in the config/db.js file.

##Setup
1. Install [io.js](https://github.com/nodejs/io.js)
  - This will also install npm
2. Make sure you have MongoDB installed because the sample is built using MongoDB
3. Run `npm install`
4. Run `iojs app.js`

##Usage
- Configure the config/db.js file to your database
- When the app is running you can go to localhost:8000/home and it may not return any data because you you do not have any date in you database.
