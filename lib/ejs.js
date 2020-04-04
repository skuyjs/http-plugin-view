const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const render = (root, file, data) => {
  const viewFile = path.resolve(root, file);
  const viewContent = fs.readFileSync(viewFile).toString();
  const template = ejs.compile(viewContent);
  return template(data);
};

module.exports = {
  render,
};
