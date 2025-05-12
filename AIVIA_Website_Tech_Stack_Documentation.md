# AIVIA Company Website - Technical Documentation

## Overview
This document provides a comprehensive overview of the technologies, architecture, and components used in the development of the AIVIA company website. The website showcases AIVIA's AI products and services, with a focus on the flagship AIKA product and the AIVIA365 suite.

## Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React.js** | JavaScript library for building the user interface |
| **TypeScript** | Static typing for JavaScript to improve code quality |
| **Tailwind CSS** | Utility-first CSS framework for styling |
| **Shadcn UI** | Component library built on Radix UI primitives |
| **Wouter** | Lightweight routing library for React applications |
| **Framer Motion** | Animation library for creating smooth transitions and effects |
| **React Hook Form** | Form validation and state management |
| **Zod** | Schema validation library |
| **TanStack React Query** | Data fetching, caching, and state management |
| **Lucide React** | Modern icon library |
| **Recharts** | Charting library for data visualization components |
| **Vite** | Fast, modern frontend build tool and development server |

### Backend
| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime environment for server-side code |
| **Express** | Web application framework for Node.js |
| **Drizzle ORM** | TypeScript ORM for SQL databases with edge support |
| **PostgreSQL** | Powerful, open-source relational database |
| **Passport.js** | Authentication middleware for Node.js |

### DevOps & Infrastructure
| Technology | Purpose |
|------------|---------|
| **Replit** | Cloud development and hosting platform |
| **Git** | Version control system |

## Architecture Overview
The application follows a modern web architecture pattern:

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Frontend  │     │   Backend   │     │  Database   │
│  (React.js) │────▶│  (Express)  │────▶│ (PostgreSQL)│
└─────────────┘     └─────────────┘     └─────────────┘
```

- **Frontend**: React with TypeScript provides a component-based UI architecture
- **Backend**: Express.js API handles data processing and business logic
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations

## Key Features

### Authentication System
- Secure login/registration flow
- Session-based authentication
- Protected routes for authenticated users
- Admin dashboard access control

### Interactive UI Components
- Neural network animation background
- AIVIA365 product suite interactive display
- Animated demonstration sections
- Responsive navigation and layout

### Contact and Communication
- Validated contact forms
- Database storage of submissions
- (Future) Email notifications via SendGrid

### Content Management
- Dynamic testimonials system
- Pricing tiers display
- Feature showcases
- FAQ section

## Database Schema
The application uses the following primary data models:

```
users
├── id (primary key)
├── username
└── password (hashed)

contact_submissions
├── id (primary key)
├── name
├── email
├── company
├── message
├── newsletter
└── created_at

testimonials
├── id (primary key)
├── quote
├── author
├── role
├── initials
├── avatar_color
├── active
└── created_at
```

## Deployment Information
The website is currently hosted on Replit, which provides:
- Continuous deployment
- Automatic SSL certificate management
- Serverless infrastructure

## Company Information
- **Company Name**: AIVIA
- **Primary Product**: AIKA (AI Knowledge Agent)
- **Product Suite**: AIVIA365
- **Contact Email**: support@aivia365.com
- **Phone**: +91 9266 136 137
- **Operations Hub**: 57, SJR Eternity, Hoodi - Bengaluru 560048
- **Headquarters**: 12848, University Club Dr Tampa FL 33612
- **Website Domain**: aivia365.com

## Future Enhancements
- Email notification system for contact form submissions via SendGrid
- Additional customer testimonials section (temporarily hidden)
- Enhanced data visualization components
- AI-powered chatbot integration

---

*Documentation generated: May 2025*