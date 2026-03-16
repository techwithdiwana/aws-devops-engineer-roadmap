# Phase 2 — Compute Services (Hands-on)

<p align="center">
  <img src="https://img.shields.io/badge/Phase-2-blue?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Focus-Compute%20Services-orange?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Type-Theory%20%2B%20Hands--On-success?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Tech%20With-Diwana-red?style=for-the-badge"/>
</p>

---

## Why Phase 2 Matters

Compute services are the **core of any AWS workload**.
Applications run on compute, scale on compute, and fail or recover because of compute decisions.

If you understand this phase well, you will:
- Design scalable systems
- Handle traffic spikes
- Avoid downtime in production

---

## 1️⃣ Amazon EC2 — Deep Dive

Amazon EC2 provides **resizable compute capacity** in the cloud.

### Concepts Explained
- **AMI (Amazon Machine Image)**: Template used to launch instances
- **Instance Types**: Define CPU, memory, and networking capacity
- **Security Groups**: Virtual firewalls controlling inbound and outbound traffic

### Practical Hands-on Steps
1. Open **EC2 Console**
2. Click **Launch Instance**
3. Choose an **AMI** (Amazon Linux 2)
4. Select instance type (t2.micro – free tier)
5. Configure key pair and network
6. Create a **Security Group**
   - Allow SSH (22)
   - Allow HTTP (80)
7. Launch the instance
8. Connect via SSH

### Real-World Use Case
- Hosting applications
- Running backend services
- Bastion hosts

---

## 2️⃣ Auto Scaling Groups (ASG)

Auto Scaling automatically adjusts capacity to maintain performance.

### Concepts Explained
- **Desired Capacity**
- **Minimum and Maximum instances**
- **Scaling policies**

### Practical Hands-on Steps
1. Create a **Launch Template**
2. Go to **Auto Scaling Groups**
3. Create a new ASG using the launch template
4. Choose VPC and multiple AZs
5. Set desired, min, and max capacity
6. Attach scaling policy (CPU-based)

### Real-World Use Case
- Handling traffic spikes
- Cost optimization
- High availability

---

## 3️⃣ Elastic Load Balancer (ALB & NLB)

Load Balancers distribute traffic across multiple targets.

### Concepts Explained
- **ALB (Application Load Balancer)**: HTTP/HTTPS traffic
- **NLB (Network Load Balancer)**: TCP/UDP traffic

### Practical Hands-on Steps
1. Open **EC2 → Load Balancers**
2. Create **Application Load Balancer**
3. Configure listeners (HTTP 80)
4. Create target group
5. Register EC2 instances
6. Test application via ALB DNS

### When to Use What
- ALB → Web applications, APIs
- NLB → Low latency, TCP-based workloads

---

## 4️⃣ Launch Templates & Lifecycle Hooks

Launch Templates define **how instances are launched**.
Lifecycle hooks let you perform actions during instance launch or termination.

### Concepts Explained
- Launch configuration vs launch template
- Instance lifecycle (Pending → InService → Terminating)
- Lifecycle hook actions

### Practical Hands-on Steps
1. Create a **Launch Template**
2. Add user data script
3. Attach it to Auto Scaling Group
4. Configure lifecycle hook
5. Observe instance behavior during scale events

### Real-World Use Case
- Installing agents during launch
- Graceful shutdown during termination

---

## Outcome of Phase 2

After completing this phase, you will:
- Confidently launch and manage EC2 instances
- Implement auto scaling
- Design load-balanced architectures
- Handle production traffic safely

---

## Next Phase

➡️ **Phase 3 — Networking (VPC)**  
You are now ready to design secure and isolated networks in AWS.

---

**Tech With Diwana**  
Learn • Build • Deploy
