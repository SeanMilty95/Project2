var express = require('express');
var router = express.Router();
var productlist_dal = require('../dal/productlist_dal');

/*GET users listing. */
router.get('/all', function(req, res, next)
{
    productlist_dal.getAll(function(err,result)
    {
        if(err)
        {
            console.log(err);
            res.send(err);
        }
        else
        {
            console.log(result);
            res.render('productlist/productlist_view_all', {products: result});
        }
    })

});

router.get('/add', function(req, res)
{
    res.render('productlist/productlist_add');
});

router.get('/insert', function(req, res)
{
    productlist_dal.InsertProduct(req.query, function(err,result)
    {
        if(err)
        {
            console.log(err);
            res.send(err);
        }
        else
        {
            res.redirect(302, '/productlist/all');
        }
    })
});

module.exports = router;