const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

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
// Host the public folder
app.use('/', feathers.static(publicPath));

// Set up Plugins and providers
app.configure(hooks());
app.configure(sequelize);
app.configure(rest());


app.configure(socketio((io) => {
  io.on('connection', function(socket) {
    socket.on('new message', function (msg) {
      app.service('messages').create({
        text: msg.message,
      });
      socket.emit('chat message', msg);
      socket.emit('messages::find', { status: 'read', user: 10 }, (error, data) => {
        console.log('Found all messages', data);
      });
    });
  });
}));


// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
app.configure(authentication);
// Set up our services (see `services/index.js`)
app.configure(services);
// Configure a middleware for 404s and the error handler
app.use(notFound());
app.use(handler());

app.hooks(appHooks);

module.exports = app;
