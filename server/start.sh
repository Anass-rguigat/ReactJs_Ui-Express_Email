#!/bin/bash
echo "Installing dependencies..."
npm install
echo ""
echo "Starting server..."
echo "Make sure you have created a .env file with your SMTP configuration!"
echo ""
npm start

