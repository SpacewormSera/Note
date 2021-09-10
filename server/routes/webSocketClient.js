const ws = require('ws')


ws.on('connection', function connection(ws) {

  ws.on('message', function (message) {
    message = JSON.parse(message);
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

const message = {
  event: 'message/connection',
  id: 123,
  username: 'sera',
  message: 'hui122'
}

function broadcastMessage(message, id) {
  wss.clients.forEach(client => {
    if (client.id === id) {
      client.send(JSON.stringify(message));
    }
    
  })
}