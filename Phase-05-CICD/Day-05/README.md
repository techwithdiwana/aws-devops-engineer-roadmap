# 🚀 GitHub Actions + AWS EC2 Integration (Production-Grade CI/CD)

![GitHub Actions](https://img.shields.io/badge/GitHub-Actions-2088FF?logo=github-actions&logoColor=white) ![AWS EC2](https://img.shields.io/badge/AWS-EC2-FF9900?logo=amazonaws&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-20-green?logo=node.js) ![CI/CD](https://img.shields.io/badge/CI/CD-Production-blue) ![Status](https://img.shields.io/badge/Status-Working-brightgreen)

> **Tech With Diwana** production-grade project demonstrating how to automatically deploy a Node.js application from GitHub to an AWS EC2 server using GitHub Actions.

---

## 📚 What You Will Learn

By completing this lab, you will understand:

- What GitHub Actions is.
- How workflows are triggered.
- How to securely store secrets.
- How GitHub connects to AWS EC2 using SSH.
- How to automate deployment.
- How to validate that deployment succeeded.

---

## 🏗️ Architecture Diagram

```text
Developer
   │
   │ git push origin main
   ▼
GitHub Repository
   ▼
GitHub Actions Workflow
   ├── Checkout Code
   ├── Setup Node.js
   ├── Validate App
   ├── Configure SSH
   ├── Copy Files to EC2
   ├── Execute Deploy Script
   └── Run Health Check
   ▼
AWS EC2 Instance
   ▼
Node.js Application
   ▼
http://EC2-PUBLIC-IP:3000
```

---

## 📁 Project Structure

```text
github-actions-aws-ec2-production/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── app/
│   ├── package.json
│   └── server.js
├── scripts/
│   └── deploy.sh
└── README.md
```

---

## 🧠 Why This Project Is Production Grade

- Automated deployment on every push to `main`.
- Secrets are stored securely.
- Deployment is repeatable.
- Application is validated before deployment.
- Health check confirms success.
- Concurrency prevents overlapping deployments.

---

# 🛠️ Step 1: Launch AWS EC2 Instance

## Why?
EC2 is the virtual server where your application will run.

## Micro Steps

1. Open AWS Console.
2. Go to EC2.
3. Click **Launch Instance**.
4. Name: `github-actions-ec2`.
5. AMI: Amazon Linux 2023 (or Amazon Linux 2).
6. Instance type: `t2.micro`.
7. Create or select a key pair.
8. Security group:
   - SSH (22) → My IP
   - Custom TCP (3000) → Anywhere
9. Click Launch.

---

# 🛠️ Step 2: Connect to EC2

## Why?
You need to install Node.js and prepare the server.

```bash
ssh -i my-key.pem ec2-user@EC2_PUBLIC_IP
```

---

# 🛠️ Step 3: Install Required Packages

## Why?
Node.js runs the application. rsync copies files efficiently.

```bash
sudo dnf install -y nodejs rsync || sudo yum install -y nodejs rsync
node -v
npm -v
```

---

# 🛠️ Step 4: Create GitHub Repository

## Why?
GitHub stores your source code and triggers the workflow.

1. Go to GitHub.
2. Create repository.
3. Upload project files.
4. Push to `main`.

---

# 🛠️ Step 5: Add GitHub Secrets

## Why?
Secrets securely store sensitive values.

GitHub → Repository → Settings → Secrets and variables → Actions.

### Add These Secrets

| Secret Name | Value |
|----------|----------|
| EC2_HOST | EC2 public IP |
| EC2_USER | ec2-user |
| EC2_SSH_KEY | Contents of `.pem` file |

### How to Get EC2_SSH_KEY

Open your `.pem` file in a text editor and copy the full content including:

```text
-----BEGIN RSA PRIVATE KEY-----
...
-----END RSA PRIVATE KEY-----
```

---

# 🛠️ Step 6: Understand Workflow File

File:
```text
.github/workflows/deploy.yml
```

## Trigger

```yaml
on:
  push:
    branches: [main]
  workflow_dispatch:
```

### Why?
- `push` → Deploy automatically on every push.
- `workflow_dispatch` → Manual run from GitHub UI.

---

## Concurrency

```yaml
concurrency:
  group: production-deploy
  cancel-in-progress: true
```

### Why?
If a new deployment starts, the previous in-progress deployment is cancelled.

---

# 🛠️ Step 7: Workflow Step-by-Step

## 1. Checkout Code
Downloads repository files.

## 2. Setup Node.js
Installs Node.js on the GitHub runner.

## 3. Validate Application
Runs syntax checks before deployment.

## 4. Configure SSH
Creates private key and known hosts.

## 5. Upload Project to EC2
Copies files using rsync.

## 6. Execute Deployment Script
Runs `scripts/deploy.sh`.

## 7. Health Check
Verifies app is accessible.

---

# 🛠️ Step 8: Deployment Script Explained

File:
```text
scripts/deploy.sh
```

### What It Does

1. Creates `/opt/techwithdiwana`.
2. Copies application files.
3. Runs `npm install`.
4. Stops existing Node.js process.
5. Starts the new version.

---

# 🛠️ Step 9: Push Code to GitHub

```bash
git add .
git commit -m "Initial production deployment"
git push origin main
```

---

# 🛠️ Step 10: Monitor Workflow

GitHub → Actions → Select latest workflow run.

Watch every step execute in real time.

---

# 🛠️ Step 11: Verify Deployment

Open:

```text
http://EC2_PUBLIC_IP:3000
```

Expected output:

```text
🚀 Tech With Diwana
GitHub Actions + AWS EC2 Deployment Successful
```

---

# 🔍 Troubleshooting

## SSH Permission Denied
- Verify `EC2_SSH_KEY`.
- Check security group allows port 22.

## Health Check Failed
- Ensure port 3000 is open.

## Node Not Found
- Reinstall Node.js on EC2.

---

# 🎯 Interview Questions Covered

1. What is GitHub Actions?
2. What are workflows, jobs, and steps?
3. How are secrets stored?
4. How do you deploy to EC2?
5. Why use rsync?
6. What is concurrency?
7. How do you perform a health check?

---

# 🚀 Future Enhancements

- Use PM2 for process management.
- Add Nginx reverse proxy.
- Build Docker image.
- Deploy to ECS or Kubernetes.
- Add Slack notifications.

---

# 👨‍💻 Author

**Tech With Diwana**