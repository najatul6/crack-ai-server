const express= require('express');
const {  generatePaint, singleImageDetails, getAllPaintings } = require('../controller/paintings.controller');
const router=express.Router()

router.get('/',getAllPaintings)
router.get('/:id',singleImageDetails)
router.post('/generate',generatePaint)

// router.post("/")

module.exports=router;