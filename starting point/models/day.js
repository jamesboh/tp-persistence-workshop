/* eslint-disable camelcase */
var Sequelize = require('sequelize');
var db = require('./_db');
var Place = require('./place');
var Hotel = require('./hotel');
var Restaurant = require('./restaurant');
var Activity = require('./activity');

var Day = db.define('day', {
  number: Sequelize.INTEGER,
});

// var Day = db.define('day_restaurant', {
//   number: Sequelize.INTEGER,
// });

// var Day = db.define('day_activity', {
//   number: Sequelize.INTEGER,
// });



Day.belongsTo(Hotel);
Day.belongsToMany(Restaurant, {through: 'day_restaurant'});
Day.belongsToMany(Activity, {through: 'day_activity'});

module.exports = Day;