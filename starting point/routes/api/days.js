var router = require('express').Router();
//var body = require('body-parser');
var Promise = require('bluebird');
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Day = require('../../models/day');

router.post('/:id/:attraction', (req, res, next) => {
	var id = req.params.id;
	var piece = req.params.attraction;

	if(piece === 'hotels'){

	} else if(piece === 'restaurants'){
		
	} else if(piece === 'activities'){
		
	}
});

router.delete('/:id/:attraction', (req, res, next) => {
	var id = req.params.id;
	var piece = req.params.attraction;
	if(piece === 'hotels'){

	} else if(piece === 'restaurants'){
		
	} else if(piece === 'activities'){
		
	}
});

router.delete('/:id', (req, res, next) => {
	var id = req.params.id;
});

router.post('/', (req, res, next) => {
	res.send("what you want, baby I got it")
	//var id = req.params.id;
	// Day.create({id: id}).save()
});

router.get('/:id', (req, res, next) => {
	var id = req.params.id;
});

router.get('/', (req, res, next) => {
	// Day.findAll({}).then((d) => {
	// 	res.send(d)
	// }).catch(next)
});


module.exports = router;
