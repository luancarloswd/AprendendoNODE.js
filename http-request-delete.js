'use strict';

const http = require('http');
const querystring = require('querystring');

const options = {
    host: 'webschool-io.herokuapp.com'
    , method: 'DELETE'
    , path: '/api/pokemons/57cf0e401f82cb11002b937a'
    , headers: {
        'Content-Type': 'application/x-www-fomr-urlencoded'
     }
    };

function callback(res){
    console.log('STATUS: ', res.statusCode);
    console.log('HEADERS: ', JSON.stringify(res.headers));

    let data = '';

    res.on('data', (chunk) =>{
        data += chunk;
    });
    res.on('end',() =>{
        console.log('Dados finalizados', data);
    });
}

const req = http.request(options, callback);

req.on('error', (e) =>{
    console.log('ERRRO', e.message);
})
req.end();