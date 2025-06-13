Patient Management System
A simple web application to manage patients, appointments, and medical records.
What You Need

Docker - Download and install Docker Desktop
That's it! Docker handles everything else.

How to Run
Step 1: Download the Code
bashgit clone https://github.com/yourusername/patient-management-system.git
cd patient-management-system
Step 2: Start the Application
bashdocker-compose up
Wait a few minutes for everything to download and start up.
Step 3: Open Your Browser

Go to http://localhost:3000 to use the app
Go to http://localhost:8000/admin for admin panel

Step 4: Create Your First Admin User
Open a new terminal and run:
bashdocker-compose exec backend python manage.py createsuperuser
Follow the prompts to create your username and password.
That's It! 🎉
Your patient management system is now running. You can:

Add patients
Schedule appointments
View medical records
Manage users

Common Commands
Stop the application:
bashdocker-compose down
Start it again:
bashdocker-compose up
See what's happening (logs):
bashdocker-compose logs
Reset everything (if something breaks):
bashdocker-compose down
docker-compose up --build
Need Help?
If something doesn't work:

Make sure Docker is running
Try the "Reset everything" command above
Check that ports 3000 and 8000 aren't being used by other apps

What's Inside

Frontend: The web interface you see at localhost:3000
Backend: The server that handles data at localhost:8000
Database: Stores all your patient information

Everything runs automatically with Docker - no need to install anything else!
