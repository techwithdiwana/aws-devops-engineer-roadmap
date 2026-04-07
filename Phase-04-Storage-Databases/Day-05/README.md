# 🚀 AWS DynamoDB — Day 12 (Professional DevOps Guide)

![AWS](https://img.shields.io/badge/AWS-DynamoDB-orange?style=for-the-badge&logo=amazonaws)
![Level](https://img.shields.io/badge/Level-Beginner--to--Intermediate-blue?style=for-the-badge)
![Focus](https://img.shields.io/badge/Focus-DevOps%20Hands--On-green?style=for-the-badge)
![Type](https://img.shields.io/badge/Type-Practical%20Learning-red?style=for-the-badge)

---

## 📌 Objective
Learn **Amazon DynamoDB** step-by-step with real-world DevOps understanding including architecture, operations, and integration.

---

# 🧠 What is DynamoDB?
- Fully managed NoSQL database
- Serverless (no infrastructure management)
- High performance (single-digit ms latency)
- Auto scaling

---

# 📅 Day 12 Learning Plan (Micro Steps)

---

## 🔹 Step 1: Basics (Foundation)

- Understand NoSQL vs SQL  
- Learn:
  - Table → Collection of data  
  - Item → Single record  
  - Attribute → Fields  

- Understand Keys:
  - Partition Key (PK)
  - Sort Key (SK)

---

## 🔹 Step 2: Table Creation (Console)

- Go to AWS Console → DynamoDB  
- Create Table:
  - Table Name: Orders  
  - Partition Key: userId  
  - Sort Key: orderId  
  - Billing Mode: On-demand  

---

## 🔹 Step 3: Insert Data (PutItem)

- Add multiple records manually

Example:
```json
{
  "userId": "user123",
  "orderId": "order001",
  "amount": 500
}
```

---

## 🔹 Step 4: Fetch Data

### GetItem
- Fetch single record using PK + SK  

### Query (IMPORTANT)
- Fetch all records for a user  

### Scan (Avoid)
- Reads full table (slow)

---

## 🔹 Step 5: Query vs Scan

| Feature | Query | Scan |
|--------|------|------|
| Speed | Fast | Slow |
| Cost | Low | High |
| Usage | Production | Debugging |

---

## 🔹 Step 6: Indexing (GSI)

- Create Global Secondary Index  
- Example:
  - status → Query orders by status  

---

## 🔹 Step 7: Production Features

- Enable Backup (PITR)  
- Enable TTL (auto delete data)  
- IAM roles for secure access  
- CloudWatch monitoring  

---

## 🔹 Step 8: Architecture Understanding

App → DynamoDB  

OR  

User → API Gateway → Lambda → DynamoDB  

---

## 🔹 Step 9: DevOps Integration

- Terraform for infrastructure  
- CI/CD pipeline deployment  
- Application integration (EKS / EC2 / Lambda)  

Example:

```hcl
resource "aws_dynamodb_table" "orders" {
  name         = "Orders"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "userId"

  attribute {
    name = "userId"
    type = "S"
  }
}
```

---

# 🧠 Final Outcome

- Understand DynamoDB concepts  
- Perform CRUD operations  
- Apply production features  
- Integrate with DevOps workflow  

---

# 💡 Pro Tips

- Focus on concepts, not commands  
- Avoid Scan in production  
- Always design Partition Key carefully  
- Use indexes wisely  

---

# 🚀 Next Step

- Build API with DynamoDB  
- Add CI/CD pipeline  
- Monitor using CloudWatch  

---

# 🏁 Author

**Tech With Diwana 🚀**
