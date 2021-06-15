var express = require('express')
var router = express.Router()

router.get('/',(req,res)=>
    res.send("login page from express")
)

module.exports = router