# 🚀 Day 07 - AWS Route 53 (DNS + Live EC2 Mapping + HTTPS Ready)

![AWS](https://img.shields.io/badge/AWS-Route53-orange?style=for-the-badge&logo=amazonaws)
![DNS](https://img.shields.io/badge/DNS-Production_Level-blue?style=for-the-badge)
![DevOps](https://img.shields.io/badge/DevOps-Hands--On-green?style=for-the-badge)
![SSL](https://img.shields.io/badge/SSL-HTTPS_Ready-red?style=for-the-badge)

---

## 📌 Project Overview

This project demonstrates how to:

- Configure DNS using AWS Route 53
- Map a custom domain & subdomain to an EC2 instance
- Deploy a static web page using Nginx
- Enable HTTPS using Let's Encrypt (Certbot)

---

## 🌐 Final Architecture

User → Route53 → EC2 (Nginx) → Website

---

## 🧪 Live Demo Setup

### Domain:
myroute.techwithdiwana.com

### Server:
EC2 Instance (Ubuntu)

### Web Server:
Nginx

---

## 🛠️ Step-by-Step Implementation

### Step 1: Launch EC2
- Create EC2 instance
- Allow port 80 & 443 in Security Group

---

### Step 2: Install Nginx
```bash
sudo apt update
sudo apt install nginx -y
```

---

### Step 3: Deploy HTML Page
```bash
sudo nano /var/www/html/index.html
```

Paste:
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Tech With Diwana</title>
</head>
<body>
<h1>Welcome to Tech With Diwana 🚀</h1>
<p>Day 7 - Route 53 Demo</p>
</body>
</html>
```

---

### Step 4: Configure Route 53
- Create Hosted Zone
- Update Nameservers in domain registrar
- Create A record:

```
myroute → EC2 Public IP
```

---

### Step 5: Verify DNS
Open:
http://myroute.techwithdiwana.com

---

### Step 6: Enable HTTPS (Free SSL)
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx
```

---

## 🔐 HTTPS Result

✔️ Secure connection enabled  
✔️ Auto-renewal configured  

---

## 🎯 Key Learnings

- DNS resolution flow
- Route 53 hosted zones & records
- Domain delegation via nameservers
- EC2 + Nginx deployment
- SSL using Let's Encrypt

---

## 💬 Interview Ready Answer

"I configured Route 53 DNS to map a subdomain to an EC2 instance and secured it using Let's Encrypt SSL via Certbot."

---

## 🚀 Next Steps

- Load Balancer + HTTPS (ACM)
- Auto Scaling
- Kubernetes deployment

---

## ⭐ Author

Tech With Diwana
