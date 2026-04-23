# 🚀 Day 16 - AWS CodePipeline CI/CD (Tech With Diwana)

![AWS](https://img.shields.io/badge/AWS-CodePipeline-blue)
![CodeBuild](https://img.shields.io/badge/CodeBuild-Build-orange)
![CodeDeploy](https://img.shields.io/badge/CodeDeploy-Deploy-green)
![EC2](https://img.shields.io/badge/EC2-Server-red)

---

## 📌 Overview

👉 This project continues from **Day 15 (CodeBuild + CodeDeploy working setup)**  
👉 We are adding **CodePipeline on top of existing CI/CD**

🔗 Base Setup (Day 15):
https://github.com/techwithdiwana/aws-devops-engineer-roadmap/tree/main/Phase-05-CICD/Day-03

---

## 🎯 Goal

Upgrade existing CI/CD:

CodeCommit → CodeBuild → CodeDeploy → EC2  

➡️ Into fully automated pipeline:

CodeCommit → CodePipeline → CodeBuild → CodeDeploy → EC2 🚀

---

## 🧱 Architecture

CodeCommit → CodePipeline → CodeBuild → CodeDeploy → EC2

---

## ⚙️ Prerequisites (From Day 15)

✔ EC2 instance running  
✔ CodeDeploy Agent installed  
✔ CodeCommit repo with code  
✔ CodeBuild project ready  
✔ CodeDeploy App + Deployment Group ready  
✔ Working deploy.zip generation  

---

# 🚀 Step-by-Step (Micro Steps)

---

## 🔐 Step 1: IAM Role (Auto)

1. Go to CodePipeline → Create pipeline  
2. Enter pipeline name: `twd-pipeline`  
3. Select:
   ✔ Allow AWS to create service role  

---

## 📦 Step 2: Artifact Store

1. Select:
   ✔ Default location (IMPORTANT)  

👉 AWS will auto create S3 bucket  
👉 No manual config needed  

---

## 🔗 Step 3: Source Stage

1. Provider → AWS CodeCommit  
2. Repository → your repo  
3. Branch → main  

✔ This will trigger pipeline on push  

---

## 🔨 Step 4: Build Stage

1. Select:
   ✔ Other build providers  
2. Provider → AWS CodeBuild  
3. Project → `my-twd-project`  

✔ Reusing existing project from Day 15  

---

## ❌ Step 5: Test Stage

👉 Click:
✔ Skip test stage  

---

## 🚀 Step 6: Deploy Stage

1. Provider → AWS CodeDeploy  
2. Region → ap-south-1  
3. Input artifact → BuildArtifact  

4. Application:
   TechWithDiwanaApp  

5. Deployment Group:
   TechWithDiwanaDG  

✔ Enable auto rollback  

---

## 🧪 Step 7: Create Pipeline

👉 Click:
✔ Create pipeline  

---

## ⚡ Step 8: Trigger Pipeline

Run:

```
git add .
git commit -m "pipeline trigger"
git push origin main
```

---

## 🔥 What Happens

1. CodeCommit triggers pipeline  
2. CodeBuild creates deploy.zip  
3. CodeDeploy deploys to EC2  
4. Application runs automatically  

---

## 🌐 Access App

http://<EC2-IP>:3000

---

## 💥 Output

✔ Fully automated CI/CD  
✔ Zero manual deployment  
✔ Production-ready flow  

---

## 🧠 Interview Ready Answer

“I extended my CI/CD pipeline by integrating AWS CodePipeline to orchestrate CodeCommit, CodeBuild, and CodeDeploy, enabling fully automated deployments on EC2.”

---

## ⚠️ Common Mistakes

❌ Using Custom S3 instead of Default  
❌ Selecting “Commands” instead of CodeBuild  
❌ Wrong deploy provider (ECS instead of CodeDeploy)  
❌ Missing appspec.yml in root  

---

## 💰 Cost

- CodePipeline → ~$1/month  
- CodeBuild → Free tier available  
- CodeDeploy → Free  
- EC2 → Based on usage  

---

## 🔥 Author

Tech With Diwana 🚀
