var express = require('express');
var router = express.Router();
var order_dal = require('../dal/order_dal');

/*GET users listing. */
router.get('/all', function(req, res, next)
{
    order_dal.getAll(function(err,result)
    {
        if(err)
        {
            console.log(err);
            res.send(err);
        }
        else
        {
            console.log(result);
            res.render('order/order_view_all', {orders: result});
        }
    })

});

router.get('/add', function(req, res)
{
    res.render('order/order_add');
});

router.get('/insert', function(req, res)
{
    order_dal.InsertOrder(req.query, function(err,result)
    {
        if(err)
        {
            console.log(err);
            res.send(err);
        }
        else
        {
            res.redirect(302, '/order/all');
        }
    })
});

module.exports = router;