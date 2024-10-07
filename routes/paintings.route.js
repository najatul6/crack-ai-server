const express= require('express');
const { testRoute, generatePaint, singleImageDetails } = require('../controller/paintings.controller');
const router=express.Router()

router.get('/',testRoute)
router.get('/:id',singleImageDetails)
router.post('/generate',generatePaint)

// router.post("/")

module.exports=router;