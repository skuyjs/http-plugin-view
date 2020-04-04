const Server = require('../../../http-server');
const View = require('../..');

const server = new Server();

const view = new View({
  engine: 'ejs',
  dir: `${__dirname}/views`
});

server.use(view.build());

server.get('/:name', (req, res) => {
  res.render('index.ejs', {
    name: req.params.name,
  });
});

server.listen(8080, () => console.log('running ...'));
