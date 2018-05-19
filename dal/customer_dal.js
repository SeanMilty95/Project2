var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback)
{
    var query = 'SELECT * FROM customer;';

    connection.query(query, function(err, result)
    {
        callback(err, result);
    });
};

 exports.InsertCustomer = function(params, callback)
{
    var query = 'Call customer_insertinfo (?,?,?)';

    var queryData = [params._name, params.email, params.phone_num];

    connection.query(query, queryData, function(err, result)
    {
        callback(err, result);
    });
};