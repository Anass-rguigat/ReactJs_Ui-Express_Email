@echo off
echo Installing dependencies...
call npm install
echo.
echo Starting server...
echo Make sure you have created a .env file with your SMTP configuration!
echo.
call npm start

