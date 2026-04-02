# 🚀 AWS DevOps Series - Day 9: Static Website Hosting (S3 + CloudFront)

![AWS](https://img.shields.io/badge/AWS-S3-orange?style=for-the-badge&logo=amazonaws)
![CloudFront](https://img.shields.io/badge/AWS-CloudFront-blue?style=for-the-badge&logo=amazonaws)
![DevOps](https://img.shields.io/badge/DevOps-Production-green?style=for-the-badge)
![Level](https://img.shields.io/badge/Level-Advanced-purple?style=for-the-badge)

---

## 📌 Project Overview

Host a static website using Amazon S3 and deliver globally using CloudFront with HTTPS.

---

## 🏗️ Architecture

User → CloudFront → S3

---

## 🧑‍💻 Step-by-Step Setup

### 1. Create S3 Bucket
- Go to S3
- Create bucket (unique name)
- Disable Block Public Access

### 2. Upload Files
- Upload index.html and styles.css

### 3. Enable Static Hosting
- Enable static website hosting
- Index: index.html

### 4. Add Bucket Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
    }
  ]
}
```

### 5. CloudFront Setup
- Create distribution
- Origin: S3
- HTTPS redirect
- Default root object: index.html

---

## 💣 Interview Line

We use S3 for hosting and CloudFront for CDN and HTTPS.

---

🚀 Tech With Diwana
