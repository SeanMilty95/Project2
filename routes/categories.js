var express = require('express');
var router = express.Router();
var categories_dal = require('../dal/categories_dal');

/*GET users listing. */
router.get('/all', function(req, res, next)
{
    categories_dal.getAll(function(err,result)
    {
        if(err)
        {
            console.log(err);
            res.send(err);
        }
        else
        {
            console.log(result);
            res.render('categories/categories_view_all', {categories: result});
        }
    })

});

router.get('/add', function(req, res)
{
    res.render('categories/categories_add');
});

router.get('/insert', function(req, res)
{
    categories_dal.InsertCategory(req.query, function(err,result)
    {
        if(err)
        {
            console.log(err);
            res.send(err);
        }
        else
        {
            res.redirect(302, '/categories/all');
        }
    })
});

module.exports = router;