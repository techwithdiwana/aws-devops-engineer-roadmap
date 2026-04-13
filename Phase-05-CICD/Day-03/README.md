# 🚀 AWS CodeDeploy + CodeBuild + CodeCommit (Full CI/CD)

![AWS](https://img.shields.io/badge/AWS-CodePipeline-orange) ![CodeBuild](https://img.shields.io/badge/CodeBuild-Build-blue) ![CodeDeploy](https://img.shields.io/badge/CodeDeploy-Deploy-green) ![Level](https://img.shields.io/badge/Level-Production-red)

---

## 📌 Architecture (Real Production Flow)

CodeCommit → CodeBuild → S3 Artifact → CodeDeploy → EC2

---

# 🔥 MICRO STEPS (END TO END)

## ✅ STEP 1: CodeCommit Repo

Use your repo:
ssh://git-codecommit.ap-south-1.amazonaws.com/v1/repos/day13repo

Push this project code into repo.

---

## ✅ STEP 2: Create S3 Bucket

- Go to S3 → Create bucket
- Name: codedeploy-artifacts-demo

---

## ✅ STEP 3: Create CodeBuild Project

1. Go to CodeBuild → Create project
2. Source:
   - Provider: CodeCommit
   - Repo: day13repo
3. Environment:
   - Managed image
   - OS: Amazon Linux
4. Buildspec: Use buildspec.yml from repo
5. Artifacts:
   - Type: S3
   - Bucket: codedeploy-artifacts-demo
   - Packaging: ZIP

👉 Now CodeBuild will:
Code → Build → ZIP → Upload to S3

---

## ✅ STEP 4: Launch EC2

- Amazon Linux
- Open port 3000
- Tag:
  Name = CodeDeployServer

---

## ✅ STEP 5: Install CodeDeploy Agent

```
sudo yum update -y
sudo yum install ruby -y
sudo yum install wget -y

cd /home/ec2-user
wget https://aws-codedeploy-ap-south-1.s3.ap-south-1.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto

sudo service codedeploy-agent start
```

---

## ✅ STEP 6: Create CodeDeploy

- Application → EC2
- Deployment Group → use EC2 tag

---

## ✅ STEP 7: Deploy from S3 Artifact

- Go to CodeDeploy → Create Deployment
- Revision:
  S3 → select artifact uploaded by CodeBuild

---

## ✅ STEP 8: Verify

http://<EC2-IP>:3000

---

# 🎯 FINAL FLOW

Developer Push → CodeCommit → CodeBuild → S3 → CodeDeploy → EC2 → LIVE APP

---

# ⭐ RESULT

🚀 Full CI/CD working using AWS DevOps tools

---

Tech With Diwana
