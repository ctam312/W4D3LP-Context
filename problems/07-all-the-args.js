function allTheArgs(func, ...args) {
  let results = args;
  return function (...nestedArgs) {
    results = results.concat(nestedArgs);
    return func(...results);
  }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
