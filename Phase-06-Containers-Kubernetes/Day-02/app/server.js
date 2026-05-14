const http = require('http');
const PORT = process.env.PORT || 3000;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tech With Diwana - Amazon ECR Demo</title>
<style>
body{margin:0;font-family:Arial,sans-serif;background:linear-gradient(135deg,#0f172a,#1e3a8a);color:#fff;display:flex;justify-content:center;align-items:center;min-height:100vh}
.card{background:rgba(255,255,255,.08);padding:50px;border-radius:20px;max-width:800px;text-align:center;box-shadow:0 20px 50px rgba(0,0,0,.4)}
h1{font-size:3rem;color:#60a5fa} h2{font-size:2rem}
.badge{display:inline-block;background:#10b981;padding:8px 16px;border-radius:999px;font-weight:bold}
p{color:#d1d5db;line-height:1.7}
</style>
</head>
<body>
<div class="card">
<h1>🚀 Tech With Diwana</h1>
<h2>Amazon ECR Demo Application</h2>
<p>This production-grade Docker image is stored in Amazon ECR.</p>
<div class="badge">Docker Image Successfully Pulled from ECR</div>
</div>
</body>
</html>`;

http.createServer((req,res)=>{
  res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
  res.end(html);
}).listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
