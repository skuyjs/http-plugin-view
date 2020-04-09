const defaultconfig = {
  engine: 'ejs',
  dir: '',
};

function view(config={}) {
  view.config = {
    ...defaultconfig,
    ...config,
  };

  view.engine = require(`./${view.config.engine || defaultconfig.engine}`);
  return view;
}

view.getConfig = function getConfig(name) {
  return !!name ? view.config[name] : view.config;
}

view.build = function build() {
  return (req, res) => {
    res.render = async (path, data) => {
      const compiled = await view.engine.render(view.config.dir, path, data);
      res.send(compiled);
    };
  };
}

module.exports = view;
