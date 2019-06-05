const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader');

const protoPath = __dirname + '/helloworld.proto';
const packageDefinition = protoLoader.loadSync(
    protoPath,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
const helloProto = grpc.loadPackageDefinition(packageDefinition).helloworld;
const rsa = require('./encode')


function sayHello(call, callback) {
  const machineId = call.request.machineId
  console.log('machineId:',machineId)
  const cdkey = rsa.encode(machineId)
  console.log('cdkey:',cdkey)
  callback(null, { cdkey: cdkey });
}

function main() {
  const server = new grpc.Server();
  server.addService(helloProto.Greeter.service, {
    sayHello: sayHello
  });
  server.bind("0.0.0.0:8055", grpc.ServerCredentials.createInsecure());
  server.start();
}

main()