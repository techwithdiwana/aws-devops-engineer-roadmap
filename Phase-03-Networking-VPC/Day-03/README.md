# 🚀 Day 6: Security Groups vs NACL (Production Ready Demo)

![AWS](https://img.shields.io/badge/AWS-Networking-orange)
![VPC](https://img.shields.io/badge/VPC-Configured-blue)
![SecurityGroup](https://img.shields.io/badge/Security%20Group-Stateful-green)
![NACL](https://img.shields.io/badge/NACL-Stateless-red)
![DevOps](https://img.shields.io/badge/Level-Production%20Grade-purple)

---

## 📌 Overview

This project demonstrates a real production-style architecture:

- Public + Private Subnet
- Security Groups (Stateful)
- NACL (Stateless)
- Bastion (Web EC2) → Backend EC2 access
- Working application (Frontend → Backend)

---

## 🏗️ Architecture Flow

User → Internet → IGW → Public Subnet → Web EC2 (Apache)
                                     ↓
                               Backend EC2 (Node.js, Private)

---

## 🖥️ EC2 Details

| EC2 | Role | Subnet |
|-----|------|--------|
| Web EC2 | Frontend + Bastion | Public |
| Backend EC2 | Node API | Private |

---

## 🛠️ 1. VPC

CIDR: 10.0.0.0/16

---

## 🛠️ 2. Subnets

Public: 10.0.1.0/24  
Private: 10.0.2.0/24  

---

## 🛠️ 3. Internet Gateway

Attach IGW to VPC

---

## 🛠️ 4. Route Tables

### Public Route Table
0.0.0.0/0 → IGW

### Private Route Table
No internet (for demo)

---

## 🔐 5. Security Groups

### Web-SG
- SSH (22) → Your IP
- HTTP (80) → Your IP

### Backend-SG
- SSH (22) → Web-SG
- Port 3000 → Web-SG

---

## 🖥️ 6. Launch EC2

Web EC2:
- Public subnet
- Public IP enabled
- Attach Web-SG

Backend EC2:
- Private subnet
- No Public IP
- Attach Backend-SG

---

## ⚙️ 7. Backend App

Install:
sudo apt update
sudo apt install nodejs npm -y

Code (server.js):

const http = require('http');
const server = http.createServer((req, res) => {
 res.writeHead(200, {'Content-Type': 'application/json'});
 res.end(JSON.stringify({ message: "Hello from Backend 🚀" }));
});
server.listen(3000, '0.0.0.0');

Run:
node server.js

---

## 🌐 8. Frontend

Install Apache:
sudo apt install apache2 -y

HTML:

<!DOCTYPE html>
<html>
<body>
<h1>Frontend Server 🚀</h1>
<button onclick="callBackend()">Call Backend</button>
<p id="output"></p>

<script>
function callBackend() {
 fetch("http://<PRIVATE-IP>:3000")
 .then(res => res.json())
 .then(data => document.getElementById("output").innerText = data.message)
 .catch(() => document.getElementById("output").innerText = "Error ❌");
}
</script>
</body>
</html>

---

## 🌐 9. NACL Rules

Inbound:
100 → HTTP → ALLOW  
110 → HTTPS → ALLOW  
120 → Ephemeral → ALLOW  
130 → YOUR IP → DENY  

Outbound:
100 → ALL → ALLOW  

---

## 🧪 10. Testing

Before DENY → Working ✅  
After DENY → Blocked ❌  

---

## 💡 Key Concepts

- Security Group = Stateful
- NACL = Stateless
- NACL overrides SG

---

## 🎯 Interview Line

Even if Security Group allows traffic, NACL can block it at subnet level.

---

## 📺 Tech With Diwana 🚀
