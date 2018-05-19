var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback)
{
    var query = 'SELECT * FROM customer_view;';

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

exports.getinfo = function (customer_id, callback) {
    var query = 'call customer_getinfo (?)';
    var queryData = [customer_id];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);
    });
};


exports.UpdateCategory = function(params,callback) {
    var query = 'update customer set _name = ?, email= ?, phone_num = ? where customer_id = ?';

    var queryData = [params._name, params.email, params.phone_num, params.customer_id];
    connection.query(query, queryData, function (err, result) {
        callback(err, result);
    });
};

exports.delete = function (customer, callback) {
    var query = 'call customer_delete(?)';
    var queryData = [customer];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);
    });
};