# 🚀 AWS DevOps Series — Day 11  
## RDS (Multi-AZ, Automated Backups & Snapshots)

![AWS](https://img.shields.io/badge/AWS-RDS-orange?logo=amazonaws&logoColor=white)
![Database](https://img.shields.io/badge/Database-Managed-blue)
![High Availability](https://img.shields.io/badge/HA-Multi--AZ-green)
![Backup](https://img.shields.io/badge/Backup-Automated-yellow)
![Level](https://img.shields.io/badge/Level-Production--Ready-red)

---

## 📌 Project Overview

This project demonstrates a **production-grade AWS RDS setup** focusing on:

- Multi-AZ deployment for high availability  
- Automated backups for disaster recovery  
- Manual snapshots for safe deployments  

This setup reflects how real-world systems ensure **zero downtime and data protection**.

---

## 🧠 What is AWS RDS?

Amazon RDS (Relational Database Service) is a **fully managed database service** that automates:

- Database provisioning  
- OS patching  
- Backups  
- Failover  
- Scaling  

Supported engines include MySQL, PostgreSQL, MariaDB, Oracle, and SQL Server.

---

## 🌍 Multi-AZ Architecture (High Availability)

### 🔹 Concept

Multi-AZ creates a **standby replica** in a different Availability Zone.

### 🔹 How it Works

- Primary DB runs in AZ-1  
- Standby DB runs in AZ-2  
- Data is synchronously replicated  
- Automatic failover occurs if primary fails  

### 🔹 Key Benefit

✔ No downtime  
✔ No data loss  
✔ Automatic failover  

---

## 💾 Backup Strategy

### 🔹 Automated Backups

- Enabled by default  
- Retention: 0–35 days  
- Includes:
  - Daily full backup  
  - Transaction logs  

👉 Supports **Point-in-Time Recovery (PITR)**

---

### 🔹 Manual Snapshots

- User-triggered  
- Stored until deleted  
- Used before deployments or risky changes  

---

## 🔧 Implementation Steps

### Step 1: Create RDS Instance

- Choose Engine (MySQL/PostgreSQL)  
- Select **Production template**  
- Enable Multi-AZ  

---

### Step 2: Configure Database

- Instance class: db.t3.micro  
- Storage: 20 GB  
- Backup retention: 7 days  

---

### Step 3: Configure Network

- VPC: Default/custom  
- Public access: Disabled  
- Security group: Allow DB port (3306)  

---

### Step 4: Launch Database

Click **Create Database**

---

### Step 5: Test Failover

- Reboot with failover option  
- Observe automatic switch  

---

## 🔍 Verification

```bash
aws rds describe-db-instances
```

Check:
- MultiAZ = true  
- BackupRetentionPeriod > 0  

---

## 🧠 Real-World Use Cases

- Banking systems  
- E-commerce platforms  
- SaaS applications  
- Critical backend systems  

---

## ⚠️ Best Practices

- Always enable Multi-AZ in production  
- Set backup retention ≥ 7 days  
- Take snapshots before deployments  
- Use private subnet (security best practice)  

---

## 🏆 Key Takeaways

- Multi-AZ ensures **high availability**  
- Backups ensure **data recovery**  
- RDS removes **manual database management overhead**  

---

## 📁 Project Structure

```
day11-rds-multi-az-backups/
│── README.md
```

---

## 👨‍💻 Author

**Tech With Diwana 🚀**

---

## ⭐ Support

If you found this helpful, give it a ⭐ on GitHub!
