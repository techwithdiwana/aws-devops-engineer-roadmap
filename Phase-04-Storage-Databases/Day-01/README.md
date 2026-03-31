# 🚀 AWS DevOps Series - Day 9: S3 (Versioning, Lifecycle, Replication - Production Demo)

![AWS](https://img.shields.io/badge/AWS-S3-orange?style=for-the-badge&logo=amazonaws)
![DevOps](https://img.shields.io/badge/DevOps-Production-blue?style=for-the-badge)
![Level](https://img.shields.io/badge/Level-Beginner%20to%20Advanced-green?style=for-the-badge)
![Project](https://img.shields.io/badge/Project-Real%20World-purple?style=for-the-badge)

---

# 📌 Project Overview

This project demonstrates how real companies use Amazon S3 for:

- Data Protection (Versioning)
- Cost Optimization (Lifecycle)
- Disaster Recovery (Replication)

---

# 🏗️ Architecture

User → S3 (Mumbai)
         ↓
   Lifecycle Policy
         ↓
   Glacier Storage
         ↓
   Replication → S3 (Singapore DR)

---

# ⚙️ STEP 1: Create Buckets

## Source (Mumbai)
- Region: ap-south-1

## Destination (Singapore)
- Region: ap-southeast-1

---

# 🔁 STEP 2: Enable Versioning

1. Open bucket
2. Go to Properties
3. Enable Versioning

---

# ♻️ STEP 3: Lifecycle Policy (Production Setup)

- 30 days → Standard-IA
- 60 days → Glacier
- 180 days → Delete
- Noncurrent versions → Delete after 90 days

---

# 🌍 STEP 4: Replication (CRR)

1. Go to Management → Replication
2. Create rule
3. Select destination bucket (Singapore)
4. Create IAM role
5. Enable rule

---

# 🧪 STEP 5: Testing

aws s3 cp test.txt s3://source-bucket/

---

# 📊 Production Best Practices

- Enable versioning always
- Use lifecycle policies
- Enable replication for DR
- Use encryption (SSE-KMS)
- Block public access

---

# 💣 Interview Ready Answer

We implemented S3 versioning for data protection, lifecycle policies for cost optimization, and cross-region replication for disaster recovery.

---

## ⭐ Tech With Diwana
