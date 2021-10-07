const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    //Return simple string
    //res.send('this is the main route')

    // Renderins Home Template
    // req.context Contains the pages data
    res.render('home', req.context)
})

router.get('/blog', (req, res, next) => {
    res.render('blog', req.context)
})

module.exports = router