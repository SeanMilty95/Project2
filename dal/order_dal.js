var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback)
{
    var query = 'SELECT * FROM order_view;';

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

exports.getinfo = function (order_num, callback) {
    var query = 'call order_getinfo (?)';
    var queryData = [order_num];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);
    });
};


exports.UpdateCategory = function(params,callback) {
    var query = 'update order_ set quantity = ?, address = ? where order_num = ?';

    var queryData = [params.quantity, params.address, params.order_num];
    connection.query(query, queryData, function (err, result) {
        callback(err, result);
    });
};