var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback)
{
    var query = 'SELECT * FROM categories;';

    connection.query(query, function(err, result)
    {
        callback(err, result);
    });
};

exports.InsertCategory = function(params, callback)
{
    var query = 'Call categories_insertinfo (?,?)';

    var queryData = [params._type, params.color];

    connection.query(query, queryData, function(err, result)
    {
        callback(err, result);
    });
};