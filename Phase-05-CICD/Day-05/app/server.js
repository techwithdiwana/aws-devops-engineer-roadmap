const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });

  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Tech With Diwana</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          padding-top: 100px;
          background: #f8fafc;
        }
        h1 {
          font-size: 3rem;
          color: #2563eb;
        }
        h2 {
          color: #111827;
        }
        p {
          color: #6b7280;
        }
      </style>
    </head>
    <body>
      <h1>🚀 Tech With Diwana</h1>
      <h2>GitHub Actions + AWS EC2 Deployment Successful</h2>
      <p>Production-Grade CI/CD Pipeline is Live.</p>
    </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});