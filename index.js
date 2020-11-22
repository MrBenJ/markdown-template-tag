const parser = require('markdown-it')();

function md(strings, ...rest) {
  const rawMd = strings.map( (str, idx) => {

    return rest[idx]
      ? str + rest[idx]
      : str;
  }).join('');

  return parser.render(rawMd);
}

module.exports = md;
