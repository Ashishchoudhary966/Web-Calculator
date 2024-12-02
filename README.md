# Web-Calculator
# Deploy a Simple Web Application on AWS EC2

### Step 1: Create an AWS EC2 Instance

1. Log in to the AWS Management Console.
2. Launch a new instance.
3. Choose Amazon Linux 2 AMI as your instance type.
4. Select a key pair or create a new and download the private key file.
5. Set up Security Group rules to allow inbound traffic on port 80 (HTTP).
5. Launch the instance.

### Step 2: Connect to the EC2 Instance

1. Open Mobaxterm.
2. Start a new SSH session:
3. Use the public IP address of your EC2 instance.
4. Enter the username: ec2-user.
5. Provide the private key file.
3. Then you will have terminal access to your EC2 instance.

### Step 3: Deploy the Web Application

Run the following commands:

1. [pwd] = Displays the current working directory
2. [sudo su] = Grants administrative permissions
3. [yum update -y] =         Update all installed system packages
4. [yum install httpd -y]   =    Install Apache HTTP server
5. [cd /var/www/html/]      =    Changes directory to the root folder
6. [vi index.html]         =   Create the index.html file
   Press i to enter insert mode and add HTML, CSS, and JS code
   Press Esc, type :wq, and press Enter to save the file
7. [cat index.html]     =      To check the content of the index.html file
8. [service httpd start]   =     Start the Apache HTTP serve

### Step 4: Access the Web Application

1. Enter the public IP address of your EC2 instance.
2. Now you can see your deployed web application.

### Notes

 To restart the Apache server use : service httpd restart
 
 To stop the server use : service httpd stop

  Now you can access my web application by using public IP address of EC2 instance provided by AWS

  65.1.111.68
