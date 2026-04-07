# 🚀 Phase 03 - Networking (VPC) - Day 1

## 📌 Topic
- VPC (Virtual Private Cloud)
- Subnets
- Route Tables

---

# 🌍 What is VPC?

A **VPC (Virtual Private Cloud)** is your own private network inside AWS.

👉 Think of it like:
- Your company's **data center in the cloud**
- You control:
  - IP range
  - Subnets
  - Routing
  - Security

---

# 🧠 Real-World Analogy

| AWS Concept | Real World |
|------------|-----------|
| VPC | City |
| Subnet | Area / Sector |
| Route Table | Road Map |
| Internet Gateway | Exit Gate |

---

# 🏗️ Architecture (Basic)

- 1 VPC
- 2 Subnets:
  - Public Subnet
  - Private Subnet
- Internet Gateway
- Route Tables

---

# ⚙️ Step-by-Step VPC Creation (Micro Steps)

## Step 1: Create VPC

1. Go to AWS Console
2. Search: **VPC**
3. Click: **Create VPC**
4. Select: **VPC only**
5. Fill details:
   - Name: devops-vpc
   - CIDR: 10.0.0.0/16
6. Click: Create

---

## Step 2: Create Subnets

### Public Subnet

- Name: public-subnet
- CIDR: 10.0.1.0/24
- AZ: ap-south-1a

### Private Subnet

- Name: private-subnet
- CIDR: 10.0.2.0/24
- AZ: ap-south-1b

---

## Step 3: Create Internet Gateway

1. Go to Internet Gateway
2. Click Create
3. Name: devops-igw
4. Attach to VPC

---

## Step 4: Create Route Table (Public)

1. Create Route Table
2. Name: public-rt
3. Add route:
   - Destination: 0.0.0.0/0
   - Target: Internet Gateway
4. Associate with Public Subnet

---

## Step 5: Private Route Table

- No Internet access
- Used for backend systems

---

# 🔥 Important Interview Questions

## Q1: Why use VPC?
👉 Isolation, security, control

## Q2: Difference between Public & Private Subnet?

| Public | Private |
|--------|--------|
| Internet access | No direct internet |
| IGW attached | No IGW |

## Q3: How many IP AWS reserves?
👉 AWS reserves **5 IPs per subnet**

---

# 🧪 Practice Task

- Create VPC
- Add 2 subnets
- Attach IGW
- Configure routing

---

# 🎯 Pro Tip (Interview)

👉 Always say:
"VPC provides network isolation and allows us to design secure architectures using subnets, route tables, and gateways."

---

# 📺 For Your YouTube Live

Explain flow like:
1. What is VPC
2. Why needed
3. CIDR basics
4. Hands-on creation
5. Interview questions

---

🔥 This is Day 1 of Networking — Master this, and AWS becomes easy!
