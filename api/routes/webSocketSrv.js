const ws = require('ws')
const wss = new ws.Server({ port: 5000 }, () => console.log('5000 started'));

const message = {
  event: 'message/connection',
  id: 123,
  username: 'sera',
  message: 'hui122'
}

wss.on('connection', function connection(ws) {
console.log('>>> connected')
  ws.send('welkome comrade');

  ws.id = Date.now();
  ws.on('message', function (message) {
    message = JSON.parse(message);
    console.log('>--> ', message)
    switch (message.event) {
      case 'message':
        broadcastMessage(message);
        break;
      case 'connection':
        broadcastMessage(message);
        break;
    }
  })
})



function broadcastMessage(message, id) {
  wss.clients.forEach(client => {
    // if (client.id === id) {
      client.send(JSON.stringify(message));
    // }
    
  });
}