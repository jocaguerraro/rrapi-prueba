const express = require('express');
const router = express.Router();
const { 
    getDetail, 
    getList, 
    createItem, 
    updateItem, 
    deleteItem } 
    = require('../controllers/video')
const  checkSesion  = require('../middlewares/origin')

//TODO http://localhost:3001/v1/video/pepe
/**
 * Lista de videos
 * **/
router.get("/",getList);
router.get("/:id",getDetail);
router.post("", createItem);
router.delete("/:id",checkSesion, deleteItem);
router.put("/:id", updateItem);


module.exports = router;