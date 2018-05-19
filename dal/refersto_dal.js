var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback)
{
    var query = 'SELECT * FROM refer_view;';

    connection.query(query, function(err, result)
    {
        callback(err, result);
    });
};

exports.InsertPair = function(params, callback)
{
    var query = 'Call pair_insertinfo (?,?)';

    var queryData = [params.order_num, params.product_num];

    connection.query(query, queryData, function(err, result)
    {
        callback(err, result);
    });
};