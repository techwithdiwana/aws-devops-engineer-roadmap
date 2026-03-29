# 🚀 Day 07 - AWS Route 53 (DNS Setup)

![AWS](https://img.shields.io/badge/AWS-Route53-orange?style=for-the-badge&logo=amazonaws)
![DNS](https://img.shields.io/badge/DNS-Concept-blue?style=for-the-badge)
![DevOps](https://img.shields.io/badge/DevOps-Learning-green?style=for-the-badge)
![Level](https://img.shields.io/badge/Level-Beginner_to_Pro-red?style=for-the-badge)

---

## 📌 What is DNS?

DNS (Domain Name System) converts domain names into IP addresses.

Example:
google.com → 142.250.xxx.xxx

---

## 🌍 How DNS Works

1. User enters domain in browser
2. Request goes to DNS resolver
3. Resolver queries Root server
4. Then TLD server (.com)
5. Then Authoritative server
6. Returns IP address

---

## ☁️ What is AWS Route 53?

Amazon Route 53 is a scalable DNS service.

### Key Features:
- Highly available
- Fast DNS resolution
- Domain registration
- Health checks

---

## 🧩 Components

### 1. Hosted Zone
Container for domain records

### 2. Record Types
- A → Domain to IP
- CNAME → Domain to domain
- MX → Mail
- TXT → Verification

### 3. Routing Policies
- Simple
- Weighted
- Latency
- Failover
- Geolocation

---

## 🧪 Hands-on Demo (Micro Steps)

### Step 1: Launch EC2
- Go to AWS Console
- Launch instance
- Copy Public IP

---

### Step 2: Install Nginx
```bash
sudo apt update
sudo apt install nginx -y
```

---

### Step 3: Create Custom Page
```bash
sudo nano /var/www/html/index.html
```

Paste:

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

---

### Step 4: Open Route 53
- Create Hosted Zone
- Enter domain name

---

### Step 5: Update Name Servers
- Copy NS records
- Update in domain provider

---

### Step 6: Create A Record
- Type: A
- Value: EC2 Public IP

---

### Step 7: Test
Open:
http://yourdomain.com

---

## 🎯 Real World Architecture

Frontend → S3 + CloudFront  
Backend → EC2 / Kubernetes  
DNS → Route53  

---

## 💬 Interview Answer

"I deployed a static web app on EC2 and mapped it with Route 53 using A records and verified DNS propagation."

---


