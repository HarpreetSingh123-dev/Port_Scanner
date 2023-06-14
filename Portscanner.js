const net = require('net')

const host = 'shadi-viah.com'   ; 
const startPort = 1; 
const endPort = 1000; 

function scanPort(port) {
  const socket = new net.Socket();

  socket.setTimeout(2000); // Timeout in milliseconds

  socket.on('connect', () => {
    console.log(`Port ${port} is open`);
    socket.destroy();
  });

  socket.on('timeout', () => {
    console.log(`Port ${port} is closed`);
    socket.destroy();
  });

  socket.on('error', (error) => {
    console.log(`Port ${port} is closed (${error.message})`);
    socket.destroy();
  });

  socket.connect(port, host);
}


function scanPorts(startPort, endPort) {
  for (let port = startPort; port <= endPort; port++) {
    scanPort(port);
  }
}


scanPorts(startPort, endPort);