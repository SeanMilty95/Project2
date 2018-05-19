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

router.get('/edit', function(req,res){
    productlist_dal.getinfo(req.query.product_num, function (err, result) {
        if(err) {res.send(err); }
        else {
            res.render('productlist/productlist_update',
                {productlist: result[0][0], product_num: result[1], _type: result[2], item_name: result[3], stock: result[4]}

            );
        }
    });
});

router.get('/update', function(req, res)
{
    productlist_dal.UpdateCategory(req.query, function(err,result)
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

router.get('/delete', function (req, res) {
    productlist_dal.delete(req.query.product_num, function (err,result) {
        if(err){
            console.log(err);
            res.send(err)
        }
        else {
            res.redirect(302, '/productlist/all');
        }
    });
});



module.exports = router;