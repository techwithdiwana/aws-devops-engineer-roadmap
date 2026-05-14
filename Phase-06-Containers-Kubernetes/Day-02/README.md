# 🚀 Amazon ECR Hands-On Lab (Production Grade)

![AWS](https://img.shields.io/badge/AWS-ECR-FF9900?logo=amazonaws&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Container-2496ED?logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20-339933?logo=node.js&logoColor=white)
![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![DevOps](https://img.shields.io/badge/AWS%20DevOps-Day%2018-blue)

> Store, manage, and secure Docker images using Amazon Elastic Container Registry (ECR).

## Architecture

```text
Developer → Docker Build → Local Image → Amazon ECR → Docker Pull → Run Container → Live Application
```

## Project Structure

```text
day-18-amazon-ecr-production/
├── app/
│   ├── package.json
│   └── server.js
├── Dockerfile
└── README.md
```

## Micro Steps

### 1. Create ECR Repository
Repository name: `techwithdiwana-ecr-demo`

### 2. Build Docker Image
```bash
docker build -t techwithdiwana-ecr-demo .
```

### 3. Get AWS Account ID
```bash
aws sts get-caller-identity
```

### 4. Login to ECR
```bash
aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin <ACCOUNT_ID>.dkr.ecr.ap-south-1.amazonaws.com
```

### 5. Tag Image
```bash
docker tag techwithdiwana-ecr-demo:latest <ACCOUNT_ID>.dkr.ecr.ap-south-1.amazonaws.com/techwithdiwana-ecr-demo:latest
```

### 6. Push Image
```bash
docker push <ACCOUNT_ID>.dkr.ecr.ap-south-1.amazonaws.com/techwithdiwana-ecr-demo:latest
```

### 7. Pull Image
```bash
docker pull <ACCOUNT_ID>.dkr.ecr.ap-south-1.amazonaws.com/techwithdiwana-ecr-demo:latest
```

### 8. Run Container
```bash
docker run -d -p 3000:3000 <ACCOUNT_ID>.dkr.ecr.ap-south-1.amazonaws.com/techwithdiwana-ecr-demo:latest
```

### 9. Verify
Open `http://localhost:3000`

## Production Best Practices
- Enable ECR image scanning
- Use immutable tags
- Configure lifecycle policies
- Restrict access with IAM

## Interview Questions
- What is Amazon ECR?
- How do you authenticate Docker to ECR?
- Difference between Docker Hub and ECR?
