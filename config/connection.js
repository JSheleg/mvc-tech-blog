const Sequelize = require('sequelize');
// const http = require('http')

require('dotenv').config();

let sequelize;
// checks if env is Heroku, if so, sets sequelize to utilize the database hosted on heroku
if(process.env.JAWSDB_URL){
    sequelize = new Sequelize(process.env.JAWSDB_URL, {
        dialect: 'postgres',
        protocol: 'postgres'
    });
}else{
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

// // Make connection.
// sequelize.connect(function(err) {
//     if (err) {
//       console.error("error connecting: " + err.stack);
//       return;
//     }
//     console.log("connected as id " + connection.threadId);
// });


module.exports = Sequelize;
