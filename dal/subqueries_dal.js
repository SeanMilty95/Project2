var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.correlated = function(callback)
{
    var query = 'SELECT _name from customer where customer_id IN ' +
        '(select customer_id from order_ where quantity > 1);';

    connection.query(query, function(err, result)
    {
        callback(err, result);
    });
};

exports.correlated = function(callback)
{
    var query = 'select * from customer join (select * from order_) b ' +
        'on b.customer_id = customer.customer_id;'

    connection.query(query, function(err, result)
    {
        callback(err, result);
    });
};

exports.In = function(callback)
{
    var query = 'select _type from Product_List where _type ' +
        'In (select _type from categories where color = "green");'

    connection.query(query, function(err, result)
    {
        callback(err, result);
    });
};