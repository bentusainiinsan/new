# Google Apps Script - Automation

This directory contains Google Apps Script code for automating data sync, email notifications, and Google Sheets integration.

## Tech Stack

- Google Apps Script
- Google Sheets API
- Gmail API
- Google Calendar API
- Google Drive API (if needed)

## Project Structure

```
/sheets          - Google Sheets integration scripts
/email           - Email notification and automation scripts
/calendar        - Calendar integration scripts
/triggers        - Time-based and event-based triggers
/utils           - Helper functions and utilities
```

## Features

### Google Sheets Integration
- Automated data sync between database and Google Sheets
- Real-time booking updates in Sheets
- Customer data export and reporting
- Service provider performance tracking

### Email Notifications
- Booking confirmation emails
- Booking reminder emails (24h before service)
- Service completion notifications
- Payment receipt emails
- Admin notification emails for new bookings

### Calendar Integration
- Automatic calendar event creation for bookings
- Service provider schedule management
- Booking conflict detection
- Reminder notifications

### SMS Alerts
- Integration with SMS gateway
- Booking confirmations via SMS
- Service reminders
- Emergency notifications

## Getting Started

### Prerequisites

- Google Cloud Platform project
- Google Apps Script project
- Required API access enabled:
  - Google Sheets API
  - Gmail API
  - Google Calendar API
- Service account credentials (if needed)

### Setup Instructions

1. Create a new Google Apps Script project
2. Enable required APIs in Google Cloud Console
3. Configure OAuth consent screen
4. Set up triggers for automated execution
5. Deploy as web app (if needed)

### Configuration

TBD - Configuration variables and setup will be documented.

## Script Files

### Main Scripts
- `main.gs` - Main entry point and orchestration
- `sheetsSync.gs` - Google Sheets synchronization
- `emailNotifications.gs` - Email sending functions
- `calendarSync.gs` - Calendar integration
- `smsAlerts.gs` - SMS notification functions

### Utility Scripts
- `config.gs` - Configuration variables
- `utils.gs` - Helper functions
- `logger.gs` - Logging utilities

## Triggers

### Time-based Triggers
- Daily data sync (midnight)
- Hourly booking checks
- Weekly reports (Monday morning)

### Event-based Triggers
- On form submission
- On spreadsheet edit
- On email received

## API Endpoints

If deployed as web app:
- `POST /webhook/booking` - Receive booking notifications
- `POST /webhook/payment` - Process payment updates
- `GET /sync/sheets` - Trigger manual sync

## Development Guidelines

TBD - Coding standards and best practices will be documented.

## Testing

TBD - Testing procedures will be documented.

## Deployment

TBD - Deployment steps will be documented.
