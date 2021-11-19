/*Bohyun Kim, #301131832, COMP 229, Section 008*/

var express = require('express');
var router = express.Router();

let surveyController = require('../controllers/survey');


function requireAuth(req,res,next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}


/* GET home page. */
router.get('/', surveyController.surveyList);

router.get('/add', requireAuth ,surveyController.surveyList)


module.exports = router;
