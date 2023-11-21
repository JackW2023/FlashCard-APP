const router = require('express').Router();


router.get('/login', (req, res) => {
    res.render('login', {layout: 'accountlogin'})
  });

router.get('/signup', (req, res) => {
    res.render('signup', {layout: 'accountlogin'})
 });

 router.get('/home', (req, res) => {
    res.render('home', {layout: 'homepage'})
 });

 router.get('/create', (req, res) => {
   res.render('create', {layout: 'homepage'})
});


module.exports = router;