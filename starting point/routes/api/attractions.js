var router = require('express').Router();
var Promise = require('bluebird');
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
// var $ = require('jquery');

router.get('/hotels', function(req, res, next) {
	Hotel.findAll({})
		.then( (allHotels) => {
			res.send(allHotels)
		})
})

router.get('/restaurants', function(req, res, next) {
	Restaurant.findAll({})
		.then( (allRestaurants) => {
			res.send(allRestaurants)
		})
})

router.get('/activities', function(req, res, next) {
	Activity.findAll({})
		.then( (allActivities) => {
			res.send(allActivities)
		})
})


module.exports = router;