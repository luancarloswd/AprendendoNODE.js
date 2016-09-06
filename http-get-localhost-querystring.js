'use strict';

const http = require('http');

http.get({
    hostname: 'localhost',
    path: '/user?name=Luan&teacher=true&age=22',
    port: 3000,
    agent: false
}, function (response){
    let body = '';
    console.log('STATUS: ' + response.statusCode);
    console.log('HEADER: ' + JSON.stringify(response.headers));
    response.on('data', function(data){
        body+= data;
    });

    response.on('end', function(){
        console.log('RESPOSTA:', body);
    })
})