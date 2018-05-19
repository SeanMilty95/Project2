var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback)
{
    var query = 'SELECT * FROM order_;';

    connection.query(query, function(err, result)
    {
        callback(err, result);
    });
};

exports.InsertOrder = function(params, callback)
{
    var query = 'Call order_insertinfo (?,?,?)';

    var queryData = [params.customer_id, params.quantity, params.address];

    connection.query(query, queryData, function(err, result)
    {
        callback(err, result);
    });
};