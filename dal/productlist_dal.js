var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback)
{
    var query = 'SELECT * FROM Product_List;';

    connection.query(query, function(err, result)
    {
        callback(err, result);
    });
};

exports.InsertProduct = function(params, callback)
{
    var query = 'Call productlist_insertinfo (?,?,?)';

    var queryData = [params._type, params.item_name, params.stock];

    connection.query(query, queryData, function(err, result)
    {
        callback(err, result);
    });
};