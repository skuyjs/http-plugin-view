const Server = require('@skuyjs/http-server');
const View = require('@skuyjs/http-plugin-view');

const server = new Server();

const view = new View({
  engine: 'handlebars',
  dir: `${__dirname}/views`
});

server.use(view.build());

server.get('/:name', (req, res) => {
  res.render('index.hbs', {
    name: req.params.name,
  });
});

server.listen(8080, () => console.log('running ...'));
