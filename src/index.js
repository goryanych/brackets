module.exports = function check(str, bracketsConfig) {
  let pairs;

  for (let i = 1; i; i--) {
    for (const elem of bracketsConfig) {
      pairs = elem.join('');

      if (str.includes(pairs)) {
        str = str.replace(pairs, '');
        i++;
      }
    }
  }

  return !str.length;
}
