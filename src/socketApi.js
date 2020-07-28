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
      isim: data.isim,
      soyisim: data.soyisim,
      yaş: data.yaş,
      maaş: data.maaş,
      mesai: data.mesai,
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