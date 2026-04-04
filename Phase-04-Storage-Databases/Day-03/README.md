# 🚀 AWS DevOps Series – Day 10 (EBS & EFS)

## 📌 Overview
This project demonstrates how to use **Amazon EBS (Elastic Block Store)** and **Amazon EFS (Elastic File System)** in a real-world production environment.

---

## 🧠 What You Will Learn
- Difference between EBS and EFS
- How to attach and mount EBS to EC2
- How to create and mount EFS
- How to use shared storage across multiple EC2 instances
- Production-grade architecture design

---

## 🧱 Architecture

User → Load Balancer → EC2 (Auto Scaling Group)
                        ↓
                  Shared Storage (EFS)

Each EC2:
- Root Disk → EBS
- Shared Data → EFS

---

## ⚙️ AWS Services Used
- EC2
- EBS
- EFS
- VPC
- Security Groups
- Auto Scaling (optional)

---

## 🔧 Step-by-Step Setup

### 🔹 Part 1: EBS Setup

1. Launch EC2 Instance (Amazon Linux 2)
2. Create EBS Volume (gp3, 10GB)
3. Attach volume to EC2
4. Connect to EC2 and run:

```bash
lsblk
sudo mkfs -t ext4 /dev/xvdf
sudo mkdir /data
sudo mount /dev/xvdf /data
```

5. Make it permanent:

```bash
sudo nano /etc/fstab
```

Add:
```
/dev/xvdf /data ext4 defaults,nofail 0 2
```

---

### 🔹 Part 2: EFS Setup

1. Create EFS File System
2. Configure Mount Targets
3. Allow NFS (2049) in Security Group

Install EFS utils:

```bash
sudo yum install -y amazon-efs-utils
```

Mount EFS:

```bash
sudo mkdir /efs
sudo mount -t efs fs-xxxx:/ /efs
```

---

## 🧪 Testing

```bash
cd /efs
echo "Hello from EC2-1" > test.txt
```

Check the same file from another EC2 instance.

---

## 🔁 Auto Scaling Integration (Advanced)

Add this in Launch Template User Data:

```bash
yum install -y amazon-efs-utils
mkdir /efs
mount -t efs fs-xxxx:/ /efs
```

---

## 📊 Use Cases

- Shared uploads directory
- Microservices shared storage
- Scalable web applications
- Container storage (EKS)

---

## 🏁 Conclusion

- **EBS** → High-performance block storage (for OS & DB)
- **EFS** → Scalable shared file storage (for multi-instance apps)

---

## 🏷️ Badges

![AWS](https://img.shields.io/badge/AWS-Cloud-orange)
![EC2](https://img.shields.io/badge/EC2-Compute-blue)
![EBS](https://img.shields.io/badge/EBS-Storage-yellow)
![EFS](https://img.shields.io/badge/EFS-Shared%20Storage-green)
![DevOps](https://img.shields.io/badge/DevOps-Learning-red)

---

## 📦 Project Structure

```
day-10-ebs-efs/
│
├── README.md
├── architecture.png
├── scripts/
│   ├── ebs-setup.sh
│   ├── efs-setup.sh
```

---

## 🎯 Interview Questions

**Q1:** What is the difference between EBS and EFS?  
👉 EBS is block storage, EFS is file storage.

**Q2:** Can EBS be attached to multiple EC2 instances?  
👉 No (except limited multi-attach cases).

**Q3:** When should you use EFS?  
👉 When you need shared storage across multiple instances.
