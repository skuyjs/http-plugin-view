const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const render = (root, file, data) => new Promise((resolve, reject) => {
  const template = ejs.renderFile(path.resolve(root, file), data, {}, function(err, str) {
    if (!!err) return reject(err);
    resolve(str.toString());
  });
});

module.exports = { render };
