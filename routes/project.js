'use strict'

var express = require('express');

var ProjectController = require ('../controllers/project')

var router = express.Router();

router.get('/get-matches', ProjectController.getMatchs)
router.get('/get-summoners/:id', ProjectController.getSummoners)

module.exports = router;