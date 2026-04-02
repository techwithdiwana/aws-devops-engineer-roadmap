# 🚀 AWS DevOps Series - Day 9: S3 Production Grade Project (Real-Time App Deployment)

![AWS](https://img.shields.io/badge/AWS-S3-orange?style=for-the-badge&logo=amazonaws)
![Project](https://img.shields.io/badge/Project-Production%20Demo-blue?style=for-the-badge)
![Level](https://img.shields.io/badge/Level-Beginner%20to%20Advanced-green?style=for-the-badge)

---

# 🎯 Project Goal

Deploy a real-world static web application on S3 like big companies.

---

# 🧠 Real Company Use Case

Companies use S3 for:
- Hosting frontend apps (React/Angular)
- Storing images/assets
- Logs storage

Example Flow:
User → Browser → S3 (Static Website)

---

# 📁 Project Structure

app/
 ├── index.html
 ├── style.css

---

# ⚙️ STEP 1: Create Bucket (MICRO STEPS)

1. Go to AWS Console
2. Open S3
3. Click Create Bucket
4. Enter name (must be unique)
5. Uncheck “Block Public Access”
6. Create bucket

---

# 🌐 STEP 2: Enable Static Website Hosting

1. Open bucket
2. Go to Properties
3. Scroll → Static Website Hosting
4. Enable
5. Index document → index.html
6. Save

---

# 📤 STEP 3: Upload Application

1. Click Upload
2. Select all files from app/
3. Upload

---

# 🔓 STEP 4: Make Files Public

1. Select files
2. Click Actions → Make Public

---

# 🌍 STEP 5: Access Website

Go to:
Bucket → Properties → Website Endpoint

---

# 🔁 STEP 6: Enable Versioning (Production)

```bash
aws s3api put-bucket-versioning \
--bucket YOUR_BUCKET_NAME \
--versioning-configuration Status=Enabled
```

---

# ♻️ STEP 7: Lifecycle (Cost Optimization)

Move old logs → Glacier after 30 days

---

# 🌍 STEP 8: Replication (DR Setup)

Create second bucket → enable replication

---

# 🚀 CLI DEPLOYMENT (DEVOPS WAY)

```bash
aws s3 sync ./app s3://YOUR_BUCKET_NAME
```

---

# 📊 PRODUCTION BEST PRACTICES

- Use CloudFront (CDN)
- Enable HTTPS
- Use versioning
- Use lifecycle
- Enable logging

---

# 🔥 FINAL THOUGHT

This is how real companies host frontend apps using S3 🚀

---

## ⭐ Tech With Diwana
