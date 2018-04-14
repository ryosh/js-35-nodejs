const app = require('./custom-express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set('io', io);

const server = http.listen(process.env.PORT || 3000, function(){
    const host = server.address().address;
    const port = server.address().port;
    console.log('Servidor executando em http://%s:%s',
        host, port);
});

// https://casadocodigo-tlpp-2018.herokuapp.com/produtos