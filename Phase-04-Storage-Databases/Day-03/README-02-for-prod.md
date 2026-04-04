# 🚀 AWS DevOps Series – Day 10 (EBS & EFS) – FULL PRODUCTION MANUAL (STEP-BY-STEP)

---

# 📌 Objective
Build a **production-grade AWS architecture manually (NO Terraform)** with:
- ALB (Load Balancer)
- Auto Scaling EC2
- EBS (Block storage)
- EFS (Shared storage)

---

# 🧱 FINAL ARCHITECTURE

User → ALB → EC2 (Auto Scaling Group) → EFS  
Each EC2 has:
- Root volume (EBS)
- Mounted shared storage (EFS)

---

# 🪜 STEP 1: CREATE IAM ROLE (VERY IMPORTANT)

1. Go to AWS Console → IAM → Roles
2. Click "Create Role"
3. Select:
   - Trusted entity: AWS Service
   - Use case: EC2
4. Attach policies:
   - AmazonElasticFileSystemClientFullAccess
   - CloudWatchAgentServerPolicy
5. Name: EC2-EFS-Role
6. Click Create

---

# 🪜 STEP 2: CREATE SECURITY GROUPS

## 2.1 ALB-SG
- Type: HTTP
- Port: 80
- Source: 0.0.0.0/0

## 2.2 EC2-SG
- SSH (22) → Your IP
- HTTP (80) → ALB-SG
- NFS (2049) → EC2-SG

---

# 🪜 STEP 3: CREATE EFS (SHARED STORAGE)

1. Go to AWS → EFS → Create File System
2. Name: devops-efs
3. Enable Encryption ✔️
4. Click Next

## Network Settings:
- Select your VPC
- Create mount targets in ALL AZs
- Attach EC2-SG

Click Create

👉 Copy File System ID (fs-xxxx)

---

# 🪜 STEP 4: CREATE LAUNCH TEMPLATE

1. Go to EC2 → Launch Templates → Create
2. Name: devops-template

## Configuration:
- AMI: Amazon Linux 2
- Instance type: t2.micro
- Key pair: select yours
- IAM Role: EC2-EFS-Role

## Security:
- Select EC2-SG

## Storage:
- Root volume: gp3 (8 GB)
- Enable encryption ✔️

## USER DATA (IMPORTANT):

Replace fs-xxxx with your EFS ID

```bash
#!/bin/bash
yum update -y
yum install -y amazon-efs-utils httpd

systemctl start httpd
systemctl enable httpd

mkdir /efs
mount -t efs fs-xxxx:/ /efs

echo "<h1>$(hostname)</h1>" > /efs/index.html
cp /efs/index.html /var/www/html/index.html
```

Click Create Template

---

# 🪜 STEP 5: CREATE TARGET GROUP

1. Go to EC2 → Target Groups → Create
2. Type: Instances
3. Protocol: HTTP
4. Port: 80
5. Health check path: /

Click Create

---

# 🪜 STEP 6: CREATE APPLICATION LOAD BALANCER

1. Go to EC2 → Load Balancer → Create
2. Type: Application Load Balancer

## Configure:
- Scheme: Internet-facing
- Listener: HTTP (80)
- VPC: same VPC
- Subnets: select 2 AZs

## Security:
- Attach ALB-SG

## Routing:
- Select Target Group

Click Create

👉 Copy ALB DNS

---

# 🪜 STEP 7: CREATE AUTO SCALING GROUP

1. Go to EC2 → Auto Scaling → Create
2. Select Launch Template

## Configure:
- Name: devops-asg
- VPC + Subnets (multi-AZ)

## Attach Load Balancer:
- Select Target Group

## Capacity:
- Min: 2
- Desired: 2
- Max: 3

Click Create

---

# 🪜 STEP 8: VERIFY SETUP

1. Open ALB DNS in browser
2. Refresh multiple times
👉 Different hostnames should appear

---

# 🪜 STEP 9: VERIFY EFS (IMPORTANT TEST)

1. SSH into EC2
2. Run:

```bash
cd /efs
echo "hello" > test.txt
```

3. Open another EC2
4. Check same file exists

---

# 🪜 STEP 10: OPTIONAL EBS (DATABASE STORAGE)

1. Go to EC2 → Volumes → Create
2. Size: 10 GB
3. Type: gp3
4. Enable encryption ✔️
5. Attach to instance

## Mount:

```bash
lsblk
mkfs -t ext4 /dev/xvdf
mkdir /data
mount /dev/xvdf /data
```

---

# 🪜 STEP 11: CLOUDWATCH MONITORING

1. Go to CloudWatch
2. Create alarm:
   - CPU > 70%
3. Add notification

---

# 🏁 FINAL RESULT

✔ High Availability  
✔ Shared Storage  
✔ Auto Scaling  
✔ Load Balanced  
✔ Production Ready  

---

# 🏷️ BADGES

![AWS](https://img.shields.io/badge/AWS-Cloud-orange)
![EFS](https://img.shields.io/badge/EFS-Shared-green)
![EBS](https://img.shields.io/badge/EBS-Storage-yellow)
![ALB](https://img.shields.io/badge/ALB-LoadBalancer-blue)
![DevOps](https://img.shields.io/badge/DevOps-Project-red)

---

# 🎯 INTERVIEW LINE

"In production, I used EFS for shared storage across Auto Scaling EC2 instances and EBS for persistent block storage with encryption and backup strategy."
