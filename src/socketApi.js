const socketio = require('socket.io');
const io = socketio();

// Models
const Bordro = require('../models/Bordro');

const socketApi = {  };
socketApi.io = io;

io.on('connection', (socket) => {
  console.log('a user connected!');

  socket.on('variables', (data) => {
    const bordro = new Bordro({
      name: data.isim,
      surname: data.soyisim,
      username: data.username,
      password: data.password,
      year: data.yaş,
      pay: data.maaş,
      overtime: data.mesai,
      sicilNo: data.sicilNo
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