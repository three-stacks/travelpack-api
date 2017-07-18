const feathers = require('feathers');
// const rest = require('feathers-rest');
const io = require('feathers-socketio');
const socket = io();
const client = feathers();
client.configure(feathers.hooks());

client.configure(feathers.socketio(socket));
const messages = client.service('messages');
// const users = client.service('users');

messages.on('created', message => 
  alert(`your message ${message.text} was created`)
);


document.getElementById('send-message').addEventListener('submit', function(ev) {
  // const nameInput = document.querySelector('[name="name"]');
  // This is the message text input field
  const textInput = document.querySelector('[name="text"]');

  // Create a new message and then clear the input field
  client.service('messages').create({
    text: textInput.value,
    // name: nameInput.value
  }).then(() => {
    textInput.value = '';
  });
  ev.preventDefault();
});


// client.configure(feathers.authentication({
//   storage: window.localStorage
// }));

// function sendMessage(){
//   var messageValue = document.getElementById("message").value;
//   messages.create({ 
//     text: messageValue
//   });
// }
