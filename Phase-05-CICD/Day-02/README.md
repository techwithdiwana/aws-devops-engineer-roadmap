# 🚀 AWS CodeBuild - Production Grade Hands-on (Day 14)

![AWS](https://img.shields.io/badge/AWS-CodeBuild-orange?style=for-the-badge&logo=amazonaws)
![DevOps](https://img.shields.io/badge/DevOps-CI/CD-blue?style=for-the-badge)
![Level](https://img.shields.io/badge/Level-Production%20Grade-green?style=for-the-badge)

---

## 📌 What is AWS CodeBuild?
AWS CodeBuild is a fully managed CI service that compiles source code, runs tests, and produces artifacts.

---

## 🧠 Real Production Flow
GitHub → CodeBuild → S3 / Docker Image → Deployment

---

## 🛠️ Hands-on Lab (Step by Step)

### Step 1: Create IAM Role
- Go to IAM → Roles → Create Role
- Select CodeBuild
- Attach:
  - AmazonS3FullAccess
  - CloudWatchLogsFullAccess

---

### Step 2: Create S3 Bucket
- Go to S3 → Create bucket
- Name: codebuild-artifacts-demo

---

### Step 3: Create CodeBuild Project
- Go to CodeBuild → Create Project
- Source: GitHub
- Environment: Managed Image (Ubuntu)
- Runtime: Standard

---

### Step 4: Add buildspec.yml

```yaml
version: 0.2

phases:
  install:
    commands:
      - echo Installing dependencies...
      - npm install
  build:
    commands:
      - echo Build started...
      - npm run build
  post_build:
    commands:
      - echo Build completed

artifacts:
  files:
    - '**/*'
```

---

### Step 5: Trigger Build
- Click "Start Build"
- Check logs in CloudWatch

---

## 📂 Sample Project Structure

```
app/
 ├── package.json
 ├── index.js
 └── buildspec.yml
```

---

## 🔥 Production Tips
- Use environment variables (Secrets Manager)
- Enable caching
- Use VPC for private builds
- Integrate with CodePipeline

---

## 🎯 Outcome
You now have a production-grade CI pipeline using AWS CodeBuild 🚀
