const express= require('express');
const { testRoute } = require('../controller/paintings.controller');
const router=express.Router()

router.get('/',testRoute)

// router.post("/")

module.exports=router;