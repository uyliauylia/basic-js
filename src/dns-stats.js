const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let arr = [];
  let target = '.';
  let substr;
  let str = '';

  for(let i=0; i<domains.length; i++) {
    let pos = 0;
    while(true) {
      let foundPos = domains[i].indexOf(target, pos);
      substr = domains[i].substring(foundPos);
      arr.push(substr);
      console.log(arr)
      pos = foundPos + 1;

      if (foundPos == -1) {
        break;
      }
    }
  }

  let map = arr.reduce(function(prev, cur) {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});
  console.log(map);
}
console.log(getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']));

module.exports = {
  getDNSStats
};
