const grpc = require('grpc')
var protoLoader = require('@grpc/proto-loader');

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

const machineId = require('./machineInfo').machineId

const rsa = require('./decode')

function main() {
  const client = new helloProto.Greeter(
    "localhost:8055",
    grpc.credentials.createInsecure()
  );
  console.log('machineId:', machineId)
  client.sayHello({ machineId: machineId }, function(err, response) {
    console.log('cdkey:', response.cdkey)
    const decodeCDKey = rsa.decode(response.cdkey)
    console.log('decodeCDKey:', decodeCDKey)
    console.log('machineId===decodeCDKey', decodeCDKey===machineId)

  });
}

main()