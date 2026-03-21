# 🚀 AWS VPC Networking - Day 5 (ZERO TO PRODUCTION - COMPLETE MICRO STEPS)

![AWS](https://img.shields.io/badge/AWS-VPC-orange?style=for-the-badge)
![DevOps](https://img.shields.io/badge/DevOps-HandsOn-blue?style=for-the-badge)
![Level](https://img.shields.io/badge/Level-Production-green?style=for-the-badge)
![Lab](https://img.shields.io/badge/Lab-Complete-red?style=for-the-badge)

---

# 📌 OBJECTIVE
Build COMPLETE working architecture:

✔ Public + Private Subnet  
✔ Bastion Access  
✔ VPC Peering (Private Communication)  
✔ VPC Endpoint (No Internet S3 Access)  

---

# 🧱 FINAL FLOW

Laptop → Bastion (Public) → Private EC2 (VPC1) ↔ Private EC2 (VPC2)  
Private EC2 → S3 via Endpoint  

---

# 🔥 STEP 1: CREATE VPC-1
1. Go to VPC → Create VPC  
2. Name: VPC-1  
3. CIDR: 10.0.0.0/16  
4. Create  

---

# 🔥 STEP 2: CREATE VPC-2
1. Name: VPC-2  
2. CIDR: 20.0.0.0/16  
3. Create  

---

# 🔥 STEP 3: CREATE SUBNETS

## VPC-1
1. Public → 10.0.1.0/24  
2. Private → 10.0.2.0/24  

## VPC-2
1. Public → 20.0.1.0/24  
2. Private → 20.0.2.0/24  

---

# 🔥 STEP 4: INTERNET GATEWAY
1. Create IGW  
2. Attach to both VPCs  

---

# 🔥 STEP 5: PUBLIC ROUTE TABLE (VPC-1)
1. Create Route Table  
2. Select VPC-1  
3. Add route:
   0.0.0.0/0 → IGW  
4. Attach Public Subnet  

---

# 🔥 STEP 6: PRIVATE ROUTE TABLE (VPC-1)
1. Create Route Table  
2. Select VPC-1  
3. Attach Private Subnet  
4. NO internet route  

---

# 🔥 STEP 7: REPEAT FOR VPC-2

---

# 🔥 STEP 8: SECURITY GROUPS

## VPC-1
- SSH → Your IP  
- ICMP → 20.0.0.0/16  

## VPC-2
- ICMP → 10.0.0.0/16  

---

# 🔥 STEP 9: EC2

## Bastion
- Public subnet  

## Private EC2 (VPC1 & VPC2)
- Private subnet  

---

# 🔥 STEP 10: CONNECT
ssh bastion → ssh private  

---

# 🔥 STEP 11: VPC PEERING
Create → Accept  

---

# 🔥 STEP 12: ROUTES
VPC1 → 20.0.0.0/16  
VPC2 → 10.0.0.0/16  

---

# 🔥 STEP 13: TEST
ping private-ip  

---

# 🔥 STEP 14: VPC ENDPOINT
S3 → Attach private RT  

---

# 🔥 STEP 15: IAM
Attach S3ReadOnly  

---

# 🔥 STEP 16: TEST S3
aws s3 ls  

---

# 🏁 RESULT
✔ Fully working production setup  
