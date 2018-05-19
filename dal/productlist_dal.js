var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback)
{
    var query = 'SELECT * FROM productlist_view;';

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

exports.getinfo = function (product_num, callback) {
    var query = 'call productlist_getinfo (?)';
    var queryData = [product_num];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);
    });
};


exports.UpdateCategory = function(params,callback) {
    var query = 'update Product_List set item_name = ?, stock = ? where product_num = ?';

    var queryData = [params.item_name, params.stock, params.product_num];
    connection.query(query, queryData, function (err, result) {
        callback(err, result);
    });
};

exports.delete = function (product, callback) {
    var query = 'call product_delete(?)';
    var queryData = [product];

    connection.query(query, queryData, function (err, result) {
        callback(err, result);
    });
};