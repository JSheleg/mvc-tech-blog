const Sequelize = require('sequelize');
// const http = require('http')

require('dotenv').config();

let sequelize;
// checks if env is Heroku, if so, sets sequelize to utilize the database hosted on heroku
if(process.env.JAWSDB_URL){
    sequelize = new Sequelize(process.env.JAWSDB_URL)
   
}else{
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = sequelize;
