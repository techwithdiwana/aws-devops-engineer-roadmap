# Phase 1 — AWS Fundamentals (Hands-on)

<p align="center">
  <img src="https://img.shields.io/badge/Phase-1-blue?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Focus-AWS%20Fundamentals-orange?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Type-Theory%20%2B%20Hands--On-success?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Tech%20With-Diwana-red?style=for-the-badge"/>
</p>

---

## Why Phase 1 Matters

AWS Fundamentals are **non-negotiable** for any DevOps Engineer.
If you skip this phase, you will struggle with architecture, security, automation, and troubleshooting later.

This phase ensures you **understand AWS deeply and practically**, not just theoretically.

---

## 1️⃣ AWS Global Infrastructure

AWS runs on a **global infrastructure** designed for high availability and fault tolerance.

### Concepts Explained
- **Region**: A physical geographic location where AWS has multiple data centers.
- **Availability Zone (AZ)**: One or more isolated data centers inside a region.
- **Edge Location**: Used for content delivery (CloudFront) to reduce latency.

AWS designs applications to run across **multiple AZs** to avoid single points of failure.

### Practical Hands-on Steps
1. Login to AWS Console
2. Open **EC2 Dashboard**
3. Check the top-right corner → note your current **Region**
4. Go to **VPC → Subnets**
5. Observe how each subnet belongs to a different **Availability Zone**
6. Open **CloudFront** and view **Edge Locations**

### Real-World Use Case
- Deploy applications across multiple AZs for high availability
- Choose regions based on latency, cost, and compliance

---

## 2️⃣ Identity and Access Management (IAM)

IAM controls **who can access what** in AWS.
Everything in AWS depends on IAM.

### Concepts Explained
- **Users**: Human identities
- **Groups**: Collection of users
- **Roles**: Temporary access for services or applications
- **Policies**: Permission definitions (JSON-based)

### Practical Hands-on Steps
1. Open **IAM Console**
2. Create a new **IAM User**
3. Enable **Programmatic Access**
4. Attach **ReadOnlyAccess** policy
5. Create an **IAM Role** for EC2
6. Attach the role to an EC2 instance

### Best Practices
- Never use root user for daily tasks
- Always enable MFA
- Follow least privilege principle

---

## 3️⃣ AWS CLI & SDK Basics

AWS CLI and SDK allow you to **interact with AWS programmatically**.

### Concepts Explained
- **AWS CLI**: Command-line tool to manage AWS services
- **AWS SDK**: Language-specific libraries to interact with AWS APIs

### Practical Hands-on Steps
1. Install AWS CLI
2. Run `aws configure`
3. Enter Access Key, Secret Key, Region
4. Test with:
   ```
   aws s3 ls
   ```
5. Explore basic EC2 and IAM commands

### Real-World Use Case
- Used in CI/CD pipelines
- Infrastructure automation
- Scripting repetitive tasks

---

## 4️⃣ Shared Responsibility Model

AWS security is shared between **AWS** and the **Customer**.

### Concepts Explained
- AWS secures the **cloud infrastructure**
- Customer secures **what they put in the cloud**

### Practical Understanding
1. AWS manages physical data centers
2. You manage OS patching, applications, IAM, and data security
3. Responsibility varies per service (EC2 vs S3 vs RDS)

### Interview Tip
Always explain with examples:
- EC2 → You manage OS
- S3 → AWS manages OS, you manage data access

---

## Outcome of Phase 1

After completing this phase, you will:
- Understand AWS infrastructure clearly
- Secure resources using IAM correctly
- Use AWS CLI for automation
- Confidently explain AWS security model

---

## Next Phase

➡️ **Phase 2 — Compute Services (EC2, Auto Scaling, Load Balancer)**

---

**Tech With Diwana**  
Learn • Build • Deploy
