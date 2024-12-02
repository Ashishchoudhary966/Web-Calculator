# Web-Calculator
# Deploy a Simple Web Application on AWS EC2
---

## Table of Contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Setup and Deployment Steps](#setup-and-deployment-steps)
  - [Step 1: Create an AWS EC2 Instance](#step-1-create-an-aws-ec2-instance)
  - [Step 2: Connect to the EC2 Instance](#step-2-connect-to-the-ec2-instance)
  - [Step 3: Deploy the Web Application](#step-3-deploy-the-web-application)
- [Access Your Web Application](#access-your-web-application)
- [Notes](#notes)

---

## Overview

1. Create an EC2 instance using Amazon Linux.
2. Connect to the EC2 instance using **Mobaxterm** or any SSH client.
3. Deploy a web application by setting up an Apache web server and placing your website files in the appropriate directory.

---

## Prerequisites

Ensure you have:
- A **simple website** .
- An **AWS account** and access to create EC2 instances.
- **Mobaxterm** or another SSH client installed.
- The private key (`.pem`) for your EC2 instance.

---

## Setup and Deployment Steps

### Step 1: Create an AWS EC2 Instance

1. Log in to the **AWS Management Console**.
2. Navigate to **EC2 Dashboard** and launch a new instance.
3. Choose **Amazon Linux 2 AMI** as your instance type.
4. Configure the instance (key points):
   - Select a **key pair** or create a new one and download the private key file.
   - Set up **Security Group rules** to allow inbound traffic on port **80 (HTTP)**.
5. Launch the instance.

---

### Step 2: Connect to the EC2 Instance

1. Open **Mobaxterm**.
2. Start a new SSH session:
   - Use the **public IPv4 address** of your EC2 instance.
   - Enter the username: `ec2-user`.
   - Provide the **private key file** (`.pem`) during the connection.
3. Once connected, you will have terminal access to your EC2 instance.

---

### Step 3: Deploy the Web Application

Run the following commands to set up your web server and deploy your website:

#### 1. Check the current directory:
```bash
pwd
```
**Purpose**: Displays the current working directory.

#### 2. Switch to the superuser:
```bash
sudo su
```
**Purpose**: Grants administrative privileges.

#### 3. Update system packages:
```bash
yum update -y
```
**Purpose**: Updates all installed system packages to the latest versions.

#### 4. Install Apache HTTP server:
```bash
yum install httpd -y
```
**Purpose**: Installs the Apache web server to serve your website files.

#### 5. Navigate to the Apache root directory:
```bash
cd /var/www/html/
```
**Purpose**: Changes directory to the root folder where web content is served.

#### 6. Create or edit the `index.html` file:
```bash
vi index.html
```
**Purpose**: Opens the `vi` editor to create or modify the main webpage file.

- Press `i` to enter **insert mode** and add your HTML, CSS, and JS code.
- Save and exit the file:
  - Press `Esc`, type `:wq`, and press `Enter`.

#### 7. Verify the `index.html` file content:
```bash
cat index.html
```
**Purpose**: Displays the contents of the `index.html` file for verification.

#### 8. Start the Apache HTTP server:
```bash
service httpd start
```
**Purpose**: Starts the Apache web server, enabling your website to be accessed.

---

## Access Your Web Application

1. Open a browser.
2. Enter the **public IPv4 address** of your EC2 instance.
3. You should see your deployed web application.

---

## Notes

- Ensure that the **Security Group** of your EC2 instance has an inbound rule for port **80 (HTTP)** to allow web traffic.
- To restart the Apache server after changes, run:
  ```bash
  service httpd restart
  ```
- To stop the server, use:
  ```bash
  service httpd stop
  ```
---
- Now you can access my web application by using public IPv4 address of EC2 instance provided by AWS
  ```
  65.1.111.68
  ```
---
