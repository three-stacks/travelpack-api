const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const Yelp = require('yelp-api-v3');

const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const socketio = require('feathers-socketio');

const handler = require('feathers-errors/handler');
const notFound = require('feathers-errors/not-found');

const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');

const sequelize = require('./sequelize');

const authentication = require('./authentication');

const app = feathers();

app.configure(configuration());

app.use(cors());
app.use(helmet());
app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const publicPath = app.get('public');
app.use(favicon(path.join(publicPath, 'favicon.ico')));

app.use('/', feathers.static(publicPath));
app.configure(hooks());
app.configure(sequelize);
app.configure(rest());

app.configure(socketio((io) => {
  let currRoom = 1;
  io.on('connection', (socket) => {
    socket.on('room', (room) => {
      console.log(room, 'in room');
      currRoom = room;
      socket.join(room) 
    });
    socket.on('new message', (msg) => {
      io.in(currRoom).emit('chat message', msg);
      console.log(msg, 'in app.js');
      app.service('messages').create({
        text: msg.message,
        userId: msg.userId,
        packId: currRoom,
      });
    });
  });
}));

const yelp = new Yelp({
  app_id: process.env.YELP_CLIENT_ID,
  app_secret: process.env.YELP_CLIENT_SECRET,
});

app.post('/yelp', (req, res) => {
  console.log(req.body, 'hit')
  yelp.search({ term: req.body.term, location: req.body.location, limit: 5 })
    .then((response) => {
      const prettyJson = JSON.stringify(response);
      console.log('received yelp results');
      res.writeHead(200);
      res.write(prettyJson);
      res.end()
    })
    .catch((err) => {
      console.error(err, 'err');
    });
});

app.configure(middleware);
app.configure(authentication);

app.configure(services);
app.use(notFound());
app.use(handler());

app.hooks(appHooks);

module.exports = app;
