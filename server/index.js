const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketIO (server);

app.use(express.static(__dirname + '/public'))

server.listen(3000, function () {
    console.log('server listening on port', 3000);
})


//Serial Comunication

const { parsers } = require('serialport');
const Serialport = require('serialport');
const { isObject } = require('util');
const ReadLine = Serialport.parsers.Readline;

const port = new Serialport('/dev/ttyUSB0', {
    baudRate: 9600
});

const parser = port.pipe(new ReadLine({ delimeter: '\r\n' }));

parser.on('open', function() {
    console.log('connection is opened');
});

parser.on('data', function (data) {
    let temp = parseInt(data, 10) + "  C";
    console.log(temp);
    io.emit('temp', data);
});

port.on('error', function (err) {
    console.log(err);
});