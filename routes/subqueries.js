var express = require('express');
var router = express.Router();
var subqueries_dal = require('../dal/subqueries_dal');


router.get('/all', function(req, res, next)
{
    res.render('subqueries/sub_view_all');
});

router.get('/corr', function(req, res, next)
{
    subqueries_dal.correlated(function(err,result)
    {
        if(err)
        {
            console.log(err);
            res.send(err);
        }
        else
        {
            console.log(result);
            res.render('subqueries/correlated_sub', {corr: result});
        }
    })

});

router.get('/join', function(req, res, next)
{
    subqueries_dal.correlated(function(err,result)
    {
        if(err)
        {
            console.log(err);
            res.send(err);
        }
        else
        {
            console.log(result);
            res.render('subqueries/join_sub', {join: result});
        }
    })

});

router.get('/in', function(req, res, next)
{
    subqueries_dal.In(function(err,result)
    {
        if(err)
        {
            console.log(err);
            res.send(err);
        }
        else
        {
            console.log(result);
            res.render('subqueries/in_sub', {IN: result});
        }
    })

});

module.exports = router;