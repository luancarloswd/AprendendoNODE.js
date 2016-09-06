'use-strict';

const http = require('http');

const options = {
    host: 'api.redtube.com'
    , path: '/?data=redtube.Videos.searchVideos&search=Sasha%20Gray'
};

function callback(response){
    console.log('STATUS: ' + response.statusCode);
    console.log('HEADERS: ' + JSON.stringify(response.headers));

    let data = '';

    response.setEncoding('utf8');
    response.on('data', (chunk) =>{
        data += chunk;
    });
    response.on('end', () =>{
        console.log('Dados finalizados:', data);
    });
}

const req = htpp.request(options, callback);
req.on('error', (e)=>{
    console.log('Erro', e.message);
});

req.end();