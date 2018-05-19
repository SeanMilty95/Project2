var express = require('express');
var router = express.Router();
var customer_dal = require('../dal/customer_dal');

/*GET users listing. */
router.get('/all', function(req, res, next)
{
    customer_dal.getAll(function(err,result)
    {
        if(err)
        {
            console.log(err);
            res.send(err);
        }
        else
        {
            console.log(result);
            res.render('customer/customer_view_all', {customers: result});
        }
    })

});

router.get('/add', function(req, res)
{
    res.render('customer/customer_add');
});

router.get('/insert', function(req, res)
{
    customer_dal.InsertCustomer(req.query, function(err,result)
    {
        if(err)
        {
            console.log(err);
            res.send(err);
        }
        else
        {
            res.redirect(302, '/customer/all');
        }
    })
});

module.exports = router;