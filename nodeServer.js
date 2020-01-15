const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let data = '';
    req.on('data', chunk => {
        data += chunk.toString();
        console.log(data);
    });

    req.on('end',() => {
       let rawData = querystring.parse(data);
       console.log(parseInt(rawData.temp));
    })
   
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end({Error : 0 , Message : 'Successful'});
});

server.listen(3000, () => {
    console.log("Server running at port 3000")
});

