# 🚀 AWS CodePipeline CI/CD (Day 16 - Tech With Diwana)

![AWS](https://img.shields.io/badge/AWS-CodePipeline-blue)
![CodeBuild](https://img.shields.io/badge/CodeBuild-Build-orange)
![CodeDeploy](https://img.shields.io/badge/CodeDeploy-Deploy-green)
![EC2](https://img.shields.io/badge/EC2-Server-red)

---

## 🎯 Goal
Automate full CI/CD pipeline using AWS CodePipeline integrating:
CodeCommit → CodeBuild → CodeDeploy → EC2

---

## 🧱 Architecture Flow
CodeCommit → CodePipeline → CodeBuild → CodeDeploy → EC2

---

## ⚙️ Prerequisites

1. AWS Account
2. EC2 Instance (Amazon Linux 2)
3. IAM Roles created
4. CodeCommit Repo with app code
5. CodeBuild project ready
6. CodeDeploy Application + Deployment Group ready

---

## 🔐 Step 1: IAM Roles

### EC2 Role
- AmazonS3ReadOnlyAccess
- AmazonEC2RoleforAWSCodeDeploy

### CodeDeploy Role
- AWSCodeDeployRole

### CodeBuild Role
- AmazonS3FullAccess

### CodePipeline Role
- Auto create during pipeline setup

---

## 🖥️ Step 2: EC2 Setup

- Launch EC2 (t2.micro)
- Open ports: 22, 3000
- Install CodeDeploy Agent

Commands:
```
sudo yum update -y
sudo yum install ruby -y
cd /home/ec2-user
wget https://aws-codedeploy-ap-south-1.s3.ap-south-1.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto
sudo service codedeploy-agent start
```

---

## 📦 Step 3: CodeCommit

- Create repository
- Push code

```
git init
git remote add origin <repo-url>
git add .
git commit -m "initial commit"
git push origin main
```

---

## 🔨 Step 4: CodeBuild

- Create project
- Use buildspec.yml

Example:
```
version: 0.2
phases:
  build:
    commands:
      - echo "Build started"
artifacts:
  files:
    - '**/*'
  name: deploy.zip
```

---

## 🚀 Step 5: CodeDeploy

- Create Application → EC2/On-prem
- Create Deployment Group
- Attach EC2 instance

---

## 🔄 Step 6: Create CodePipeline

1. Go to CodePipeline → Create pipeline
2. Select **Build custom pipeline**

---

## 🔗 Step 7: Source Stage

- Provider: CodeCommit
- Repo: your repo
- Branch: main

---

## 🔨 Step 8: Build Stage

- Provider: AWS CodeBuild
- Select existing project

---

## 🚀 Step 9: Deploy Stage

- Provider: AWS CodeDeploy
- Application: TechWithDiwanaApp
- Deployment Group: TechWithDiwanaDG

---

## 🧪 Step 10: Trigger Pipeline

```
git add .
git commit -m "pipeline trigger"
git push origin main
```

---

## 🌐 Access Application

http://<EC2-PUBLIC-IP>:3000

---

## 💥 Result

✔ Auto build  
✔ Auto deploy  
✔ Fully automated CI/CD  

---

## 🧠 Interview Line

“I implemented an end-to-end CI/CD pipeline using AWS CodePipeline integrating CodeCommit, CodeBuild, and CodeDeploy for automated deployments on EC2.”

---

## ⚠️ Cost Note

- CodePipeline: ~$1/month
- CodeBuild: Free tier available
- CodeDeploy: Free (EC2)
- EC2: Depends on usage

---

## 🔥 Author

Tech With Diwana 🚀
