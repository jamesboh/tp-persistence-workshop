var router = require('express').Router();
//var body = require('body-parser');
var Promise = require('bluebird');
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Day = require('../../models/day');


var i = 0;

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

router.delete('/', (req, res, next) => {
	Day.findOne({
		where: {
			number: i
		}
	})
	.then( function(day) {
		i--;
		return day.destroy();
	})
	.catch(next)
});

router.post('/', (req, res, next) => {
	Day.create(i++)
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
