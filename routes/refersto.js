var express = require('express');
var router = express.Router();
var refersto_dal = require('../dal/refersto_dal');

/*GET users listing. */
router.get('/all', function(req, res, next)
{
    refersto_dal.getAll(function(err,result)
    {
        if(err)
        {
            console.log(err);
            res.send(err);
        }
        else
        {
            console.log(result);
            res.render('refersto/refersto_view_all', {refersto: result});
        }
    })

});

router.get('/add', function(req, res)
{
    res.render('refersto/refersto_add');
});

router.get('/insert', function(req, res)
{
    refersto_dal.InsertPair(req.query, function(err,result)
    {
        if(err)
        {
            console.log(err);
            res.send(err);
        }
        else
        {
            res.redirect(302, '/refersto/all');
        }
    })
});

module.exports = router;