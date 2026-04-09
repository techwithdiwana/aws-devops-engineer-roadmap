# 🚀 Day 13 – AWS CodeCommit (Complete DevOps Guide)

<p align="center">
  <img src="https://img.shields.io/badge/AWS-CodeCommit-orange?style=for-the-badge&logo=amazonaws"/>
  <img src="https://img.shields.io/badge/Git-VersionControl-blue?style=for-the-badge&logo=git"/>
  <img src="https://img.shields.io/badge/DevOps-Learning-green?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/CI/CD-Integration-purple?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Day-13-success?style=for-the-badge"/>
</p>

---

## 📌 What is AWS CodeCommit?

AWS CodeCommit is a fully managed source control service that helps you host secure and scalable Git repositories in the cloud.

👉 It is like GitHub / GitLab, but inside AWS.

---

## ⚙️ Key Features

- Fully managed Git repositories
- IAM-based security
- No repository size limits
- Integrated with CodeBuild, CodeDeploy, CodePipeline
- No server management

---

## 🧠 How CodeCommit Works

Developer → Git Push → CodeCommit → CI/CD → Deployment

---

## 🆚 CodeCommit vs GitHub

| Feature | CodeCommit | GitHub |
|--------|-----------|--------|
| Hosting | AWS | External |
| Security | IAM Based | Token Based |
| Integration | AWS Native | Third-party |

---

## 🛠️ Prerequisites

- AWS Account
- IAM User
- Git Installed

---

## 🔐 Step 1 – Create IAM User

- IAM → Add User
- Enable Programmatic Access
- Attach AWSCodeCommitFullAccess
- Save credentials

---

## 🔑 Step 2 – Setup Git Credentials

- IAM → Security Credentials
- Generate HTTPS Git credentials

---

## 📦 Step 3 – Create Repository

- Open CodeCommit
- Click Create Repository

---

## 💻 Step 4 – Clone Repository

git clone https://git-codecommit.ap-south-1.amazonaws.com/v1/repos/my-repo

---

## 📁 Step 5 – Add Code

git add .
git commit -m "Initial commit"

---

## 🚀 Step 6 – Push Code

git push origin main

---

## 🔍 Step 7 – Verify

Check repository in AWS Console

---

## 🔥 Advanced Concepts

- Branching
- Pull Requests
- CI/CD Integration

---

## 🧪 Real DevOps Use Case

Developer → CodeCommit → CodePipeline → CodeBuild → Deployment

---

## ❗ Common Issues

- Authentication Failed
- Access Denied
- Repo Not Found

---

## 🎯 Interview Questions

- What is CodeCommit?
- Why use it?
- How it works?

---

## 📊 Summary

CodeCommit = Secure Git in AWS
