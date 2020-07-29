const socketio = require('socket.io');
const io = socketio();

// Models
const Bordro = require('../models/Bordro');

const socketApi = {  };
socketApi.io = io;

io.on('connection', (socket) => {
  console.log('a user connected!');

  socket.on('FIND', (data) => {

    Bordro.find({ username: data.username, password: data.password }, (err, data) => {
      const veri = data[0];

      socket.emit('FIND', veri);
    });
  });

  socket.on('variables', (data) => {
    const bordro = new Bordro({
      name: data.isim,
      surname: data.soyisim,
      username: data.username,
      password: data.password,
      year: data.yaş,
      pay: data.maaş,
      overtime: data.mesai,
      TCno: data.tcno
    });

    bordro.save((err, data) => {
      if(err){
        console.log(err);
      }
    });
    console.log(bordro);
  });
});

module.exports = socketApi;