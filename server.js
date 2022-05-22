const http = require('http');

let requestCounter = 0;

const server = http.createServer((request, response) => {
    requestCounter++;
    switch (request.url){
        case '/students':
            response.write("Students of SDU")
            break;
        case '/courses':
            response.write("Course: BackEnd NodeJS") 
            break;
        default:
            response.write("404 page");
            break;
    }


    response.write("IT-KAMASUTRA" + requestCounter);
    response.end();


})

server.listen(3003);