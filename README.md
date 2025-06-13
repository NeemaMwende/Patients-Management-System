# 🌡️ **Patient Management System**

A simple web application to manage **patients**, **appointments**, and **medical records** — all in one place.

## 🚀 **What You Need**

- ✅ **[Docker](https://www.docker.com/)** — Download and install Docker Desktop  
- ✅ That’s it! Docker handles everything else.

## 🛠️ **How to Run**

### 📥 Step 1: Download the Code

```bash
git clone https://github.com/yourusername/patient-management-system.git
cd patient-management-system
```
### 📥 Step 2: Start the Application

```bash
docker-compose up
```
###⌛ Wait a few minutes for Docker to download images and start everything.

### 🌐 Step 3: Open Your Browser

Frontend: http://localhost:3000
Admin Panel: http://localhost:8000/admin

### 👤 Step 4: Create Your First Admin User
In a new terminal, run:

```bash
docker-compose exec backend python manage.py createsuperuser
```
### Follow the prompts to create your username and password.

🎉 That's It!
Your Patient Management System is now up and running. You can:

🧍 Add patients
📅 Schedule appointments
📁 View medical records
👥 Manage users

## Common Commands

Stop the application:
```bash
bashdocker-compose down
```
Start it again:
```bash
bashdocker-compose up
```

See what's happening (logs):
```bash
bashdocker-compose logs
```
Reset everything (if something breaks):
```bash
bashdocker-compose down
```
docker-compose up --build


## Need Help?
If something doesn't work:

Make sure Docker is running
Try the "Reset everything" command above
Check that ports 3000 and 8000 aren't being used by other apps

## What's Inside

Frontend: The web interface you see at localhost:3000
Backend: The server that handles data at localhost:8000
Database: Stores all your patient information

Everything runs automatically with Docker - no need to install anything else!





