# 🚀 Complete AWS CI/CD (Tech With Diwana)

![AWS CodeCommit](https://img.shields.io/badge/AWS-CodeCommit-blue)
![AWS CodeBuild](https://img.shields.io/badge/AWS-CodeBuild-orange)
![AWS CodeDeploy](https://img.shields.io/badge/AWS-CodeDeploy-green)
![EC2](https://img.shields.io/badge/AWS-EC2-yellow)
![CI/CD](https://img.shields.io/badge/CI/CD-FullPipeline-success)

---

## 🔁 Flow

CodeCommit → CodeBuild → S3 → CodeDeploy → EC2 → Application Running

---

# 🧱 MICRO STEPS (DETAILED)

---

## 🔹 STEP 1: Create IAM Roles

### 1️⃣ EC2 Role
1. Go to IAM → Roles → Create Role  
2. Trusted entity → EC2  
3. Attach policies:
   - AmazonS3ReadOnlyAccess  
   - AmazonEC2RoleforAWSCodeDeploy  
4. Name: EC2-CodeDeploy-Role  

---

### 2️⃣ CodeDeploy Role
1. IAM → Roles → Create Role  
2. Trusted entity → CodeDeploy  
3. Attach:
   - AWSCodeDeployRole  
4. Name: CodeDeploy-Service-Role  

---

### 3️⃣ CodeBuild Role
1. IAM → Roles → Create Role  
2. Trusted entity → CodeBuild  
3. Attach:
   - AmazonS3FullAccess  
   - CloudWatchLogsFullAccess  
4. Name: CodeBuild-Service-Role  

---

## 🔹 STEP 2: Launch EC2

1. Go to EC2 → Launch Instance  
2. Select Amazon Linux 2  
3. Enable Public IP  

### Security Group:
- Port 22 → SSH  
- Port 3000 → Custom TCP → 0.0.0.0/0  

### Attach IAM Role:
EC2 → Actions → Security → Modify IAM Role  
Select: EC2-CodeDeploy-Role  

---

## 🔹 STEP 3: Install CodeDeploy Agent

SSH into EC2:

```
sudo yum update -y
sudo yum install ruby wget -y
cd /home/ec2-user
wget https://aws-codedeploy-ap-south-1.s3.ap-south-1.amazonaws.com/latest/install
chmod +x install
sudo ./install auto
sudo service codedeploy-agent start
```

---

## 🔹 STEP 4: Create CodeCommit Repository

1. Go to CodeCommit → Create Repository  
2. Name: tech-with-diwana-repo  

### Push Code:
```
git clone <repo-url>
cd repo
git add .
git commit -m "initial commit"
git push origin main
```

---

## 🔹 STEP 5: Create S3 Bucket

1. Go to S3 → Create Bucket  
2. Region same as EC2  

---

## 🔹 STEP 6: Create CodeBuild Project

1. Go to CodeBuild → Create Project  

### Source:
- Provider → CodeCommit  
- Repo → tech-with-diwana-repo  

### Environment:
- Managed Image  
- OS → Amazon Linux  

### Service Role:
- CodeBuild-Service-Role  

### Artifacts:
- Type → S3  
- Bucket → your-bucket  
- Packaging → ZIP  

---

## 🔹 STEP 7: Create CodeDeploy

### Application:
- Name: TechWithDiwanaApp  
- Platform: EC2  

### Deployment Group:
- Name: TechWithDiwanaDG  
- Deployment Type: In-place  

### Service Role:
- CodeDeploy-Service-Role  

### EC2 Target:
Tag-based selection  
Example:
Key: Name  
Value: CodeDeployServer  

---

## 🔹 STEP 8: Create Deployment

1. CodeDeploy → Create Deployment  
2. Source → S3  

Bucket: your-bucket  
Key: deploy.zip  

---

## 🔹 STEP 9: Verify Deployment

SSH into EC2:
```
ls /home/ec2-user/app
```

---

## 🌐 STEP 10: Access Application

http://<EC2-PUBLIC-IP>:3000

---

# 🎯 Expected Output

🚀 Tech With Diwana - CI/CD Working!

---

# ⚠️ Common Mistakes

- IAM role missing ❌  
- Wrong ZIP structure ❌  
- Port 3000 closed ❌  
- Region mismatch ❌  

---

# 🧠 Interview Line

“I built an end-to-end CI/CD pipeline using AWS CodeCommit, CodeBuild, and CodeDeploy with EC2 as the deployment target.”

---

# 🏁 Done

Full CI/CD pipeline successfully implemented 🚀
