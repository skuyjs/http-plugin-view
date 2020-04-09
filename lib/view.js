const defaultconfig = {
  engine: 'ejs',
  dir: '',
};

class View {
  constructor(config={}) {
    this.config = {
      ...defaultconfig,
      ...config,
    };

    this.engine = require(`./${this.config.engine || defaultconfig.engine}`);
  }

  getConfig(name) {
    return !!name ? this.config[name] : this.config;
  }

  build() {
    return (req, res) => {
      res.render = (path, data) => res.send(this.engine.render(this.config.dir, path, data));
    };
  }
}

module.exports = View;
