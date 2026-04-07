# 🚀 Tech With Diwana - Serverless User API (Production Style)

![AWS](https://img.shields.io/badge/AWS-Serverless-orange?style=for-the-badge&logo=amazonaws)
![Lambda](https://img.shields.io/badge/AWS-Lambda-blue?style=for-the-badge)
![DynamoDB](https://img.shields.io/badge/Database-DynamoDB-green?style=for-the-badge)
![API](https://img.shields.io/badge/API-Gateway-yellow?style=for-the-badge)

---

# 🧠 Architecture

User → API Gateway → Lambda → DynamoDB

---

# 🎯 Project Goal

- Create user (POST)
- Get user (GET)
- Fully serverless backend

---

# 🛠️ Step-by-Step Lab Setup (UI Based)

## Step 1: Create DynamoDB Table
- Table Name: devops-users
- Partition Key: user_id (String)
- Sort Key: email (String)

## Step 2: Create Lambda Function
- Runtime: Python 3.x
- Name: user-api-lambda

## Step 3: Add IAM Role
Attach: AmazonDynamoDBFullAccess

## Step 4: Create API Gateway
- HTTP API
- Routes:
  - POST /user
  - GET /user

---

# 💻 Lambda Code

See lambda_function.py

---

# 🔥 Test API

## Create User
curl -X POST https://your-api-url/user -H "Content-Type: application/json" -d '{"user_id":"500","email":"demo@techwithdiwana.com","name":"Diwana","role":"DevOps"}'

## Get User
curl "https://your-api-url/user?user_id=500&email=demo@techwithdiwana.com"

---

# 🎯 Production Insights

- Serverless architecture
- Auto scaling
- No server management
- Cost efficient

---
# 🎤 Interview Ready Explanation
I built a fully serverless REST API using API Gateway, Lambda, and DynamoDB where API Gateway handles requests, Lambda processes business logic, and DynamoDB stores user data.

# 🔥 Author
Tech With Diwana 🚀
