// console.log("Hello World");

// creating a node.js server

const http = require('http');
const hostname = '127.0.0.1';
const port = 3500;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('MY Node.JS Server Started');
// });

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Navigation Menu</title>
      <style>
          body{
              margin: 0 0;
              padding: 0 0;
          }
          .navbar{
              background-color: rgb(255 178 178);
          }
          .navbar ul{
              overflow: auto;
          }
          .navbar li a{
              padding: 3px 3px;
              text-decoration: none;
              color: #2a00ff;
          }
          .navbar li {
              float: left;
              list-style: none;
              margin: 15px 15px;
              font-size: 20px;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
          .navbar li a:hover{
              color: yellow;
          }
          .search{
              color: white;
              float: right;
              margin: 10px;
          }
          .navbar #query{
              border-radius: 4px;
              padding: 8px;
              padding-left: 24px;
              width: 244px;
              margin-right: -18px;
          }
          .navbar #search{
              border-radius: 4px;
              font-size: 16px;
              padding: 7px;
              width: 70px;
              margin-right: 26px;
          }
          .navbar #search:hover{
              background: rgb(11, 11, 11);
              color: white;
          }
  
      </style>
  </head>
  <body>
      <header>
          <nav class="navbar">
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Join</a></li>
                  <div class="search">
                      <input type="submit" value="Search" id="search"> 
                  </div>
                  <div class="search">
                     <input type="search" name="search" id="query" placeholder="Search Your query">
                  </div>
              </ul>
          </nav>
      </header>
  </body>
  </html>`);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});