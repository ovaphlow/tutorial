/*
 *
 * Copyright 2015 gRPC authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

var PROTO_PATH = __dirname + '/protos/test.proto';

var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var testProto = grpc.loadPackageDefinition(packageDefinition).helloworld;

function main() {
  var client = new testProto.Greeter('localhost:50051',
                                       grpc.credentials.createInsecure());
  var user;
  if (process.argv.length >= 3) {
    user = process.argv[2];
  } else {
    user = 'world';
  }
  client.sayHello({name: user}, function(err, response) {
    if (err) console.error(err)
    console.log('Greeting:', response.message);
  });

  client.sayHelloAgain({name: 'you'}, function (err, response) {
    if (err) console.error(err)
    console.log('Greeting:', response.message)
  })

  // test proto
  console.info('begin test')
  // test1PackageDefinition, test1Proto, clientTest 可以在文件中预先设置
  test1PackageDefinition = protoLoader.loadSync(
    './protos/test1.proto', // 加载proto文件
    {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true
    }
  )
  console.info('set package definition')
  const test1Proto = grpc.loadPackageDefinition(test1PackageDefinition).test // 最后的test是proto文件中的package值
  console.info('load package definition')
  const clientTest = new test1Proto.Test('localhost:50051', grpc.credentials.createInsecure()) // Test是proto文件中的Service值
  console.info('初始化Test')
  let param
  process.argv.length >= 3 ? param = process.argv[2] : '1123' // 设置发送的数据
  // 通信在这之后开始
  clientTest.save({name: param}, (err, response) => { // name为proto文件中设置的发送参数
    if (err) console.error(err)
    console.log('Test:', response.message) // message为proto文件中设置的接收参数
  })
}

main();
