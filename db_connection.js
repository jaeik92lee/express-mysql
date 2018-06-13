var mysql = require('mysql');
var db_config = require('./config/local.db.config.json');
var connection = mysql.createPool({
    "host"     : db_config.host,
    "user"     : db_config.user,
    "password" : db_config.password,
    "database" : db_config.database
});

module.exports = connection;