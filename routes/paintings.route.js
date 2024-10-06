const express= require('express');
const { testRoute, generatePaint } = require('../controller/paintings.controller');
const router=express.Router()

router.get('/',testRoute)
router.get('/generate',generatePaint)

// router.post("/")

module.exports=router;