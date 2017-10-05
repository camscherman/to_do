const Express = require('express')
const router = Express.Router();

const kx = require('../db/connection.js')


router.get('/', (req, res) => {

    let task = null;
    kx.select()
        .from('list')
        .then( list =>{
            res.render("index", {list});
        })
    

})

router.post('/', (req, res) => {
    let {task} = req.body;
    kx
        .insert({task: task}).into('list').then(console.log);


    res.redirect('/');
})

router.get('/about', (req,res) =>{
    res.render('about')
})

module.exports = router