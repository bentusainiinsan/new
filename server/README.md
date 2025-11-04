# Backend - Server Application

This directory contains the Node.js/Express-based backend API for the Rental Service platform.

## Tech Stack

- Node.js
- Express.js
- MongoDB/PostgreSQL
- JWT Authentication
- Payment Gateway Integration
- REST API Architecture

## Project Structure

```
/src
  /controllers    - Request handlers and business logic
  /models         - Database models and schemas
  /routes         - API route definitions
  /middleware     - Authentication, validation, error handling
  /services       - Business logic and external API integrations
  /utils          - Helper functions and utilities
  /config         - Configuration files
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB/PostgreSQL database
- Environment variables configuration

### Installation

TBD - Instructions will be added as development progresses.

### Running the Application

TBD - Instructions will be added as development progresses.

## API Endpoints

### Authentication
- POST `/api/auth/register` - User registration
- POST `/api/auth/login` - User login
- POST `/api/auth/logout` - User logout

### Services
- GET `/api/services` - Get all services
- GET `/api/services/:id` - Get service by ID
- POST `/api/services` - Create new service (Admin)
- PUT `/api/services/:id` - Update service (Admin)
- DELETE `/api/services/:id` - Delete service (Admin)

### Bookings
- GET `/api/bookings` - Get user bookings
- POST `/api/bookings` - Create new booking
- GET `/api/bookings/:id` - Get booking details
- PUT `/api/bookings/:id` - Update booking status
- DELETE `/api/bookings/:id` - Cancel booking

### Users
- GET `/api/users/profile` - Get user profile
- PUT `/api/users/profile` - Update user profile
- GET `/api/users` - Get all users (Admin)

## Development Guidelines

TBD - Coding standards and best practices will be documented.

## Database Schema

TBD - Database models and relationships will be documented.

## Environment Variables

TBD - Required environment variables will be listed.
