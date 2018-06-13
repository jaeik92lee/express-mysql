var db = require('../db_connection');

var Comments = {
    
    getAllComments: function(callback){
        return db.query("select * from comments;", callback);
    },
 
    getCommentsByWriter: function(writer, callback) {
        return db.query("select * from comments where writer = ?", [writer], callback);
    },

    addComments: function(params, callback) {
        return db.query("insert into comments(writer, comment) values(?, ?);", params, callback);
    },
    
    deleteComments: function(id, callback) {
        return db.query("delete from comments where id = ?;",[id], callback);
    },
 
    updateComments: function(id, params, callback) {
        params.push(id);
        return db.query("update comments set writer = ?, comment = ? where id = ?;", params, callback);
    },
 };

 module.exports = Comments;