var express = require('express')
var router = express.Router()

router.get('/', (req,res)=>{
    res.send("hompage from express")
})

  module.exports = router