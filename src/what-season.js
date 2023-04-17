const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  try {
    if (typeof(date) === 'undefined') {
      return 'Unable to determine the time of year!';
    }

    if (Date.prototype.toString.call(date) !== '[object Date]') {

    if (date.getMonth() === 11 || date.getMonth() < 2) {
      return "winter";
    }
    if (date.getMonth() < 5) {
      return "spring";
    }
    if (date.getMonth() < 8) {
      return "summer";
    }
    if (date.getMonth() < 11) {
      return "fall";
    }
  }
  }
  catch(err) {
    console.log('Invalid date!');
  }
}

console.log(getSeason(new Date()));

module.exports = {
  getSeason
};
