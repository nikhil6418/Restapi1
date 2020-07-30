# CureAssist Backend Task

## Introduction
Developed some basic NodeJS based APIs for User Authentication, Form Submission

## Tech Stack Used
- Server-Side Runtime Environment - NodeJS
- Server Side Framework - Ex[ressJS
- Database - MongoDB


## API Endpoints
### Authentication Routes
- Register a user
```bash
POST /user/resgister  - body(email,password)
```
- Login
```bash
POST /user/login  - body(email,password)
```
### Form Submission Routes
- Predict COVID-19 risk based on user input
```bash
POST /form/ - header("token": <jwt token received after login>) - body(symptoms, travelHistory, suspectContact)
```
