# Media Toolkit for Disaster Reporting

<div align="center">

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![PHP](https://img.shields.io/badge/PHP-777BB4?logo=php&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)

**A comprehensive bilingual platform empowering journalists, influencers, and citizens with verified tools and resources for effective disaster and crisis reporting.**

[Live Demo](#) • [Documentation](./docs/) • [Report Bug](https://github.com/AhmadDakalbab1/media-toolkit-disaster-reporting/issues) • [Request Feature](https://github.com/AhmadDakalbab1/media-toolkit-disaster-reporting/issues)

</div>

---

## Table of Contents

- [About The Project](#about-the-project)
- [Technical Overview](#technical-overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Installation Guide](#installation-guide)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Documentation](#documentation)
- [Deployment](#deployment)
- [Testing](#testing)
- [Contributing](#contributing)
- [Roadmap](#roadmap)
- [Skills Demonstrated](#skills-demonstrated)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## About The Project

The **Media Toolkit for Disaster Reporting** is a production-grade, full-stack web application designed to serve as a comprehensive resource directory for journalists, influencers, and citizens covering disasters and humanitarian crises. The platform addresses the critical need for verified, accessible, and culturally-appropriate information during crisis situations. LOL change #2

### Project Scope

This enterprise-level application features:

- 🌐 **27 fully responsive pages** organized into 13 thematic sections
- 🛠️ **368+ verified tools and resources** across multiple categories
- 📡 **Real-time news aggregation** from 7 trusted humanitarian organizations
- 🗣️ **Bilingual interface** (English/Arabic) with complete RTL support
- ⚙️ **Full-stack architecture** with React frontend and PHP/MySQL backend
- 🤖 **AI-powered assistance** through integrated chatbot
- 👨‍💼 **Admin content management system** with review workflow
- 🚀 **Production-ready deployment** with comprehensive SEO optimization

### Academic Context

Developed as part of academic requirements at the **University of Sharjah** under the supervision of **Prof. Qassim**, this project demonstrates:

- 💻 Professional software engineering practices
- 🔧 Full-stack development expertise
- 🔄 DevOps principles and methodologies
- 🏗️ Real-world application architecture
- 📚 Comprehensive technical documentation
- 🔒 Security-first development approach

### Business Value

This platform solves real-world challenges by:

- 📌 **Centralizing** scattered disaster reporting resources
- ⚡ **Reducing** information verification time for journalists
- ✅ **Improving** accuracy through fact-checking tool integration
- 🌍 **Democratizing** access to professional reporting tools
- 🗨️ **Supporting** multilingual crisis communication
- 🤝 **Enabling** community-driven content contribution

---

## Technical Overview

### System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Client Layer                         │
│  React 18 + TypeScript + Tailwind CSS + i18next         │
│  (27 Pages, 60+ Components, Wouter Routing)             │
└─────────────────────┬───────────────────────────────────┘
                      │
                      ├──────── HTTP/HTTPS ────────┐
                      │                            │
┌─────────────────────▼───────────────┐   ┌────────▼───────────┐
│     Application Layer (PHP)         │   │   External APIs    │
│  ├─ RESTful Endpoints               │   │  ├─ ReliefWeb API  │
│  ├─ Request Validation              │   │  ├─ IFRC GO API    │
│  ├─ Business Logic                  │   │  └─ RSS Feeds (5)  │
│  └─ Email Service (PHPMailer)       │   └────────────────────┘
└─────────────────────┬───────────────┘
                      │
                      ├──── mysqli (Prepared Statements) ────
                      │
┌─────────────────────▼───────────────┐
│      Data Layer (MySQL)             │
│  ├─ resource_submissions            │
│  ├─ admin_users                     │
│  ├─ Indexes for Performance         │
│  └─ Automated Timestamps            │
└─────────────────────────────────────┘
```

### Design Patterns Implemented

- **Component-Based Architecture** - Modular, reusable React components
- **Repository Pattern** - Data access abstraction in backend
- **MVC Separation** - Clear separation of concerns
- **Singleton Pattern** - Database connection management
- **Factory Pattern** - Component creation and rendering
- **Observer Pattern** - State management and updates
- **Strategy Pattern** - Multi-source news aggregation

### Performance Optimizations

- **Code Splitting** - Lazy loading with React.lazy()
- **Asset Optimization** - Vite-based bundling and minification
- **Database Indexing** - Strategic indexes on frequently queried columns
- **Caching Strategy** - LocalStorage for language preferences
- **CDN Integration** - Static asset delivery optimization
- **Responsive Images** - Smart placeholder system for news feeds

---

## Key Features

### 1. Comprehensive Resource Directory

**13 Main Sections:**

- Crisis Reporting - Professional guidelines and best practices
- Breaking News Tools - Real-time verification resources
- Verification & Fact-Checking - 6 specialized sub-sections
  - Image Verification
  - Video Analysis
  - Geolocation Tools
  - Account Verification
  - Fact-Check Databases
  - AI Detection Tools
- Data & Maps - Interactive crisis mapping resources
- Safety & Well-Being - Journalist safety protocols
- Training Resources - Professional development materials
- Risk Communication - Crisis communication strategies
- Digital Tools - 368+ tools across 6 categories
- For Influencers - Social media responsibility guidelines
- For Citizens - Community reporting tools
- About & Submit - Platform information and contribution system

### 2. Real-Time News Aggregation System

**Multi-Source Integration:**

- UN OCHA ReliefWeb (REST API)
- World Health Organization (RSS)
- International Federation of Red Cross (GO API)
- UNICEF (RSS)
- UNHCR (RSS)
- World Food Programme (RSS)
- Médecins Sans Frontières (RSS)

**Advanced Features:**

- Unified data normalization across disparate sources
- Proxy-based CORS handling for cross-origin requests
- Intelligent image placeholder system
- Source attribution and categorization
- Optional content translation capabilities
- Error handling and fallback mechanisms
- Caching and performance optimization

### 3. Bilingual Architecture (EN/AR)

**Internationalization Infrastructure:**

- i18next framework with react-i18next bindings
- Complete translation coverage across all pages
- Dynamic RTL/LTR layout switching
- Persistent language preference (localStorage)
- Professional translations verified with multiple tools
- Culturally-appropriate design adaptations
- SEO optimization for both languages

### 4. Full-Stack Submission System

**Frontend:**

- Comprehensive validation (email, URL, required fields)
- Real-time user feedback
- Accessible form design
- Loading states and error handling

**Backend (PHP):**

- RESTful API endpoint (`POST /api/submit-resource.php`)
- Server-side validation and sanitization
- SQL injection prevention (prepared statements)
- XSS protection
- Automated email notifications
- Error logging and monitoring

**Database:**

- Structured schema with proper indexing
- Status workflow (pending → approved/rejected)
- Automated timestamps
- Admin user management

**Admin Panel:**

- Submission review interface
- Filtering and search capabilities
- Status management
- Analytics and statistics

### 5. AI-Powered Chatbot

- 🤖 Open-source AI integration
- 🧠 Context-aware responses
- 🗣️ Bilingual conversation support
- 💾 Persistent chat history
- 📱 Responsive chat interface
- ⚡ Real-time assistance

### 6. Advanced Search & Navigation

**Search System:**

- 📑 Resource indexing and categorization
- 🔍 Fuzzy search algorithm
- 🔗 Internal and external resource linking
- 🏷️ Category-based filtering
- ⚡ Real-time results

**Navigation Features:**

- 🍞 Breadcrumb trail system
- ⬆️ Back-to-top functionality
- 📱 Mobile-responsive menu
- 🌐 Language switcher
- 🎯 Quick access shortcuts

### 7. UI Component Library

**60+ Reusable Components:**

- 🧭 Navigation and Footer
- 🎴 Resource Cards
- 🏷️ Dynamic Badges
- 🚨 Emergency Banners
- 👨‍🏫 Expert Voices Section
- ⏳ Loading Skeletons
- 🪟 Modal Dialogs
- 📝 Form Controls
- 📊 Responsive Tables
- ✨ And more...

**Design System:**

- 🎨 Consistent Tailwind CSS styling
- ♿ Accessibility standards (WCAG 2.1)
- 📱 Mobile-first responsive design
- 🌙 Dark mode compatible structure
- 🌐 Cross-browser compatibility

---

## Technology Stack

### Frontend Technologies

| Technology        | Purpose                            | Version |
| ----------------- | ---------------------------------- | ------- |
| **React**         | UI Framework                       | 18.x    |
| **TypeScript**    | Type Safety & Developer Experience | 5.x     |
| **Vite**          | Build Tool & Dev Server            | 5.x     |
| **Tailwind CSS**  | Utility-First Styling              | 3.x     |
| **i18next**       | Internationalization Framework     | 23.x    |
| **react-i18next** | React Bindings for i18n            | 14.x    |
| **Wouter**        | Lightweight Routing                | 3.x     |
| **Lucide React**  | Icon Library                       | Latest  |
| **Recharts**      | Data Visualization                 | 2.x     |
| **Framer Motion** | Animation Library                  | 11.x    |

### Backend Technologies

| Technology    | Purpose              | Version  |
| ------------- | -------------------- | -------- |
| **PHP**       | Server-Side Language | 8.x      |
| **MySQL**     | Relational Database  | 8.x      |
| **mysqli**    | Database Driver      | Built-in |
| **PHPMailer** | Email Service        | 6.x      |

### Development Tools

| Tool           | Purpose                  |
| -------------- | ------------------------ |
| **Git**        | Version Control          |
| **ESLint**     | Code Linting             |
| **Prettier**   | Code Formatting          |
| **WAMP/XAMPP** | Local Development Server |
| **phpMyAdmin** | Database Administration  |
| **Postman**    | API Testing              |
| **VSCode**     | Code Editor              |

### Production Tools

| Tool                   | Purpose               |
| ---------------------- | --------------------- |
| **Netlify/Vercel**     | Frontend Hosting      |
| **SSL/TLS**            | Security Certificates |
| **Google Analytics**   | Usage Analytics       |
| **Sitemap/Robots.txt** | SEO Optimization      |

---

## Architecture

### Frontend Architecture

```
src/
├── components/              # Reusable UI Components
│   ├── ui/                 # Primitive Components (60+)
│   ├── Navigation.tsx      # Main Navigation
│   ├── Footer.tsx          # Site Footer
│   ├── SearchBar.tsx       # Search Functionality
│   ├── DynamicNewsFeed.tsx # News Aggregator
│   └── ...
├── pages/                  # Route Components (27)
│   ├── HomePage.tsx
│   ├── Verification-Tools/ # Sub-section (6 pages)
│   ├── Digital-Tools/      # Sub-section (6 pages)
│   └── ...
├── locales/                # Translations
│   ├── en.ts              # English
│   └── ar.ts              # Arabic
├── styles/
│   └── globals.css        # Global Styles
├── App.tsx                # Main Application
├── main.tsx               # Entry Point
└── i18n.ts                # i18n Configuration
```

### Backend Architecture

```
api/
├── submit-resource.php     # Main Submission Endpoint
├── view-submissions.php    # Admin Panel
├── config.php             # Database Configuration
├── test-connection.php    # Connection Testing
└── test-database.php      # Database Testing

database/
└── setup.sql              # Schema & Seed Data
```

### Data Flow

```
User Input → Validation → React State → API Call → PHP Processing →
Database → Email Notification → Response → UI Update
```

---

## Getting Started

### Prerequisites

Ensure the following software is installed on your system:

```bash
Node.js (v16.x or higher)
npm or pnpm (latest version)
WAMP/XAMPP (latest version)
Git (latest version)
Modern web browser (Chrome, Firefox, Safari, Edge)
```

### System Requirements

- **Operating System:** Windows 10/11, macOS 10.15+, or Linux
- **RAM:** Minimum 4GB (8GB recommended)
- **Disk Space:** 500MB for dependencies and build files
- **Network:** Internet connection for package installation and API calls

---

## Installation Guide

### Step 1: Clone the Repository

```bash
git clone https://github.com/AhmadDakalbab1/media-toolkit-disaster-reporting.git
cd media-toolkit-disaster-reporting
```

### Step 2: Install Frontend Dependencies

```bash
# Using npm
npm install

# Or using pnpm (recommended for faster installation)
pnpm install
```

### Step 3: Database Setup

1. Start your WAMP/XAMPP server
2. Open phpMyAdmin at `http://localhost/phpmyadmin`
3. Create a new database:
   ```sql
   CREATE DATABASE media_toolkit CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```
4. Import the schema:
   - Click on the `media_toolkit` database
   - Go to "Import" tab
   - Select `database/setup.sql`
   - Click "Go"

**Alternative (Command Line):**

```bash
mysql -u root -p
CREATE DATABASE media_toolkit;
USE media_toolkit;
SOURCE database/setup.sql;
EXIT;
```

### Step 4: Backend Configuration

Create `api/config.php`:

```php
<?php
// Database Configuration
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', ''); // Your MySQL password
define('DB_NAME', 'media_toolkit');

// Email Configuration
define('ADMIN_EMAIL', 'u18103921@sharjah.ac.ae');
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);

// Application Settings
define('APP_ENV', 'development'); // 'production' for live
define('DEBUG_MODE', true);
?>
```

### Step 5: Test Database Connection

Visit: `http://localhost/media-toolkit-disaster-reporting/api/test-connection.php`

Expected output:

```
✅ Database connection successful!
✅ Tables verified: resource_submissions, admin_users
```

### Step 6: Start Development Server

```bash
npm run dev
# or
pnpm dev
```

The application will be available at: `http://localhost:5173`

### Step 7: Verify Installation

1. 🌐 Open `http://localhost:5173` in your browser
2. 🔄 Test language switching (EN ↔ AR)
3. 🧭 Navigate through different pages
4. 📝 Submit a test resource
5. 👨‍💼 Check admin panel at `http://localhost/media-toolkit-disaster-reporting/api/view-submissions.php`

---

## API Documentation

### Endpoints

#### `POST /api/submit-resource.php`

Submit a new resource for review.

**Request Headers:**

```
Content-Type: application/json
```

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "organization": "Example News Organization",
  "country": "United Arab Emirates",
  "resourceType": "tool",
  "resourceName": "Advanced Verification Tool",
  "resourceUrl": "https://example.com/tool",
  "description": "A comprehensive verification tool for fact-checking",
  "tags": "verification, fact-checking, tools",
  "consent": true
}
```

**Validation Rules:**

- 👤 `name`: Required, 3-255 characters
- 📧 `email`: Required, valid email format
- 🏢 `organization`: Optional, max 255 characters
- 🌍 `country`: Optional, max 255 characters
- 🏷️ `resourceType`: Required, one of: tool, article, guide, course
- 📝 `resourceName`: Required, 3-255 characters
- 🔗 `resourceUrl`: Required, valid URL format
- 📄 `description`: Optional, max 2000 characters
- 🏷️ `tags`: Optional, comma-separated
- ✅ `consent`: Required, must be true

**Success Response (200):**

```json
{
  "success": true,
  "message": "Resource submitted successfully! We'll review it shortly.",
  "submissionId": 123
}
```

**Error Response (400):**

```json
{
  "success": false,
  "message": "Invalid email format",
  "errors": {
    "email": "Please provide a valid email address"
  }
}
```

**Error Response (500):**

```json
{
  "success": false,
  "message": "Server error. Please try again later."
}
```

**Features:**

- Email validation (RFC 5322 compliant)
- URL validation and sanitization
- SQL injection prevention via prepared statements
- XSS protection through input sanitization
- Automated email notification to admin
- Error logging for debugging
- Rate limiting (planned)

#### `GET /api/view-submissions.php`

Admin panel for viewing and managing submissions.

**Authentication:**

- Basic HTTP authentication required
- Credentials stored in `admin_users` table

**Query Parameters:**

- `status` - Filter by status: pending, approved, rejected
- `type` - Filter by resource type
- `search` - Search by keyword
- `limit` - Results per page (default: 50)
- `offset` - Pagination offset

**Example:**

```
GET /api/view-submissions.php?status=pending&limit=20
```

**Response:**
HTML page with:

- 📊 Submissions table
- 🔍 Filtering controls
- 📈 Statistics dashboard
- ⚙️ Action buttons (approve/reject)

---

## Database Schema

### `resource_submissions` Table

```sql
CREATE TABLE resource_submissions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    organization VARCHAR(255),
    country VARCHAR(255),
    resource_type VARCHAR(50) NOT NULL,
    resource_name VARCHAR(255) NOT NULL,
    resource_url TEXT NOT NULL,
    description TEXT,
    tags TEXT,
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    INDEX idx_status (status),
    INDEX idx_type (resource_type),
    INDEX idx_email (email),
    INDEX idx_submitted_at (submitted_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

**Indexes Rationale:**

- `idx_status` - Fast filtering by submission status
- `idx_type` - Quick resource type queries
- `idx_email` - User submission history lookup
- `idx_submitted_at` - Chronological sorting

### `admin_users` Table

```sql
CREATE TABLE admin_users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    role ENUM('admin', 'moderator') DEFAULT 'moderator',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL,

    INDEX idx_username (username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

**Security Features:**

- 🔐 Password hashing using bcrypt (cost factor 12)
- 🔒 Unique username constraint
- 👮 Role-based access control
- 📊 Last login tracking for security audits

### Entity Relationship

```
┌─────────────────────────┐
│  resource_submissions   │
│─────────────────────────│
│  id (PK)                │
│  name                   │
│  email                  │
│  organization           │
│  country                │
│  resource_type          │
│  resource_name          │
│  resource_url           │
│  description            │
│  tags                   │
│  status                 │
│  submitted_at           │
│  updated_at             │
└─────────────────────────┘

┌─────────────────────────┐
│     admin_users         │
│─────────────────────────│
│  id (PK)                │
│  username (UNIQUE)      │
│  password_hash          │
│  email                  │
│  role                   │
│  created_at             │
│  last_login             │
└─────────────────────────┘
```

---

## Project Structure

```
media-toolkit-disaster-reporting/
│
├── src/                                # Source Code
│   │
│   ├── components/                     # React Components
│   │   ├── ui/                        # UI Primitives (60+ components)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   │
│   │   ├── Navigation.tsx             # Main Navigation Component
│   │   ├── Footer.tsx                 # Site Footer
│   │   ├── Breadcrumbs.tsx           # Navigation Breadcrumbs
│   │   ├── SearchBar.tsx             # Advanced Search
│   │   ├── ResourceCard.tsx          # Resource Display Card
│   │   ├── DynamicNewsFeed.tsx       # Multi-Source News Aggregator
│   │   ├── EmergencyBanner.tsx       # Alert System
│   │   ├── ExpertVoices.tsx          # Expert Content Section
│   │   ├── BackToTop.tsx             # Scroll Utility
│   │   ├── PageTypeBadge.tsx         # Dynamic/Static Indicator
│   │   └── BilingualText.tsx         # i18n Wrapper
│   │
│   ├── pages/                         # Route Components (27 pages)
│   │   │
│   │   ├── HomePage.tsx               # Landing Page
│   │   ├── CrisisReporting.tsx        # Crisis Guidelines
│   │   ├── BreakingNews.tsx          # Breaking News Tools
│   │   ├── Verification.tsx           # Verification Overview
│   │   ├── Tools.tsx                  # Digital Tools Overview
│   │   ├── DataMaps.tsx              # Data & Mapping Resources
│   │   ├── Safety.tsx                 # Safety Guidelines
│   │   ├── Training.tsx               # Training Resources
│   │   ├── RiskCommunication.tsx     # Risk Communication
│   │   ├── Influencers.tsx           # Influencer Guidelines
│   │   ├── Citizens.tsx              # Citizen Reporting
│   │   ├── About.tsx                  # About Platform
│   │   ├── SubmitPage.tsx            # Resource Submission
│   │   ├── SiteClassification.tsx    # Classification Info
│   │   │
│   │   ├── Verification-Tools/        # Verification Sub-Section
│   │   │   ├── ImageVerification.tsx
│   │   │   ├── VideoAnalysis.tsx
│   │   │   ├── Geolocation.tsx
│   │   │   ├── AccountVerification.tsx
│   │   │   ├── FactCheckDatabases.tsx
│   │   │   └── AIDetection.tsx
│   │   │
│   │   └── Digital-Tools/             # Tools Sub-Section
│   │       ├── AIWriting.tsx
│   │       ├── Automation.tsx
│   │       ├── MediaCreation.tsx
│   │       ├── Research.tsx
│   │       ├── TechnicalTools.tsx
│   │       └── VerificationSafety.tsx
│   │
│   ├── locales/                       # Internationalization
│   │   ├── en.ts                     # English Translations
│   │   └── ar.ts                     # Arabic Translations
│   │
│   ├── styles/
│   │   └── globals.css               # Global Styles & Tailwind
│   │
│   ├── App.tsx                        # Main Application (26+ routes)
│   ├── main.tsx                       # React Entry Point
│   ├── i18n.ts                        # i18next Configuration
│   └── vite-env.d.ts                 # TypeScript Definitions
│
├── api/                               # PHP Backend
│   ├── submit-resource.php           # Form Submission Handler
│   ├── view-submissions.php          # Admin Panel
│   ├── config.php                    # Configuration (gitignored)
│   ├── test-connection.php           # DB Connection Test
│   ├── test-database.php             # Database Test
│   └── test-form.html                # Form Testing Utility
│
├── database/
│   └── setup.sql                     # Database Schema & Seeds
│
├── docs/                             # Comprehensive Documentation
│   ├── 01-php-restful-apis.md
│   ├── 02-mysql-database-connections.md
│   ├── 03-user-authentication-systems.md
│   ├── 04-sql-for-beginners.md
│   ├── 05-git-github-basics.md
│   ├── 06-deployment-guide.md
│   └── 07-full-stack-interview-prep.md
│
├── public/                           # Static Assets
│   ├── logo.png
│   └── favicon.ico
│
├── .gitignore                        # Git Ignore Rules
├── index.html                        # HTML Entry Point
├── package.json                      # Dependencies
├── package-lock.json                 # Dependency Lock
├── tsconfig.json                     # TypeScript Config
├── tsconfig.node.json               # TypeScript Node Config
├── vite.config.ts                   # Vite Configuration
├── tailwind.config.js               # Tailwind Configuration
├── postcss.config.js                # PostCSS Configuration
├── robots.txt                       # SEO - Search Directives
├── sitemap.xml                      # SEO - Site Structure
├── LICENSE                          # MIT License
└── README.md                        # This File
```

---

## Usage

### For End Users

#### Browsing the Platform

1. **Navigate Sections**
   - 🧭 Use the main navigation menu to explore 13 primary sections
   - 📂 Sub-menus provide access to specialized tools and resources
   - 🍞 Breadcrumbs help track your location within the site

2. **Language Switching**
   - 🔄 Click the language toggle in the navigation bar
   - 🌐 Choose between English (EN) and Arabic (AR)
   - ↔️ Layout automatically adjusts for RTL (Arabic)
   - 💾 Preference is saved for future visits

3. **Search Functionality**
   - 🔍 Use the search bar to find specific tools or resources
   - 📑 Results are categorized for easy navigation
   - 🔗 Both internal pages and external resources are indexed

4. **News Feed**
   - 📰 Access real-time humanitarian news on the homepage
   - 🔍 Filter by source or category
   - 🔗 Click through to original articles
   - 🔄 News updates every 30 minutes

#### Submitting a Resource

1. Navigate to **Submit a Resource** page
2. Complete the submission form:
   - **Personal Information:** Name, email, organization, country
   - **Resource Details:** Type, name, URL
   - **Description:** Detailed information about the resource
   - **Tags:** Relevant keywords for categorization
   - **Consent:** Agree to terms and conditions
3. Click **Submit**
4. Receive confirmation email
5. Resource enters admin review queue

#### Using AI Chatbot

1. Click the chat icon in the bottom-right corner
2. Type your question in English or Arabic
3. Receive context-aware responses
4. Chat history persists during your session

### For Administrators

#### Accessing Admin Panel

1. 🌐 Navigate to: `http://yourdomain.com/api/view-submissions.php`
2. 🔐 Enter admin credentials (default: see setup.sql)
3. 📊 Access the submissions dashboard

#### Managing Submissions

1. **View All Submissions**
   - 📋 See complete list with status indicators
   - 👁️ View submission details

2. **Filter & Search**
   - 🔍 Filter by status (pending/approved/rejected)
   - 🏷️ Filter by resource type
   - 🔎 Search by keywords

3. **Review Actions**
   - ✅ Approve high-quality submissions
   - ❌ Reject inappropriate content
   - ⏳ Mark for additional review

4. **Analytics**
   - 📊 View submission statistics
   - 📈 Track approval rates
   - 📉 Monitor submission trends

---

## Documentation

Comprehensive learning materials and technical documentation:

### Available Documentation

| Document                | Topics Covered                                         | Purpose                 |
| ----------------------- | ------------------------------------------------------ | ----------------------- |
| **PHP & RESTful APIs**  | API design, routing, validation, security              | Backend development     |
| **MySQL Connections**   | Database connectivity, mysqli, PDO, connection pooling | Database integration    |
| **User Authentication** | Session management, password hashing, JWT, OAuth       | Security implementation |
| **SQL for Beginners**   | CRUD operations, joins, indexes, optimization          | Database fundamentals   |
| **Git & GitHub**        | Version control, branching, collaboration, CI/CD       | Development workflow    |
| **Deployment Guide**    | Server setup, SSL, optimization, monitoring            | Production deployment   |
| **Interview Prep**      | Common questions, technical challenges, best practices | Job preparation         |

### Documentation Features

- 📖 Step-by-step tutorials
- 💻 Code examples and snippets
- ✅ Best practices and patterns
- 🔒 Security considerations
- ⚡ Performance optimization tips
- 🔧 Troubleshooting guides
- 🌍 Real-world scenarios

**Ideal for:**

- 💼 Job interview preparation
- 📁 Portfolio presentations
- 🎓 Technical skill development
- 🔄 DevOps learning path
- 🚀 Full-stack development mastery

---

## Deployment

### Frontend Deployment

#### Option 1: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

**Netlify Configuration** (`netlify.toml`):

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Option 2: Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

**Vercel Configuration** (`vercel.json`):

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Backend Deployment

#### Shared Hosting (cPanel)

1. **Upload Files:**
   - FTP upload `api/` folder to `public_html/api/`
   - Ensure correct file permissions (644 for files, 755 for directories)

2. **Database Setup:**
   - Create MySQL database via cPanel
   - Import `database/setup.sql` via phpMyAdmin
   - Update `api/config.php` with database credentials

3. **Configuration:**
   - Set up email service (SMTP credentials)
   - Configure error logging
   - Enable HTTPS/SSL

4. **Testing:**
   - Test API endpoints
   - Verify database connectivity
   - Check email notifications

#### VPS/Cloud Deployment (Ubuntu/Debian)

```bash
# Install LAMP Stack
sudo apt update
sudo apt install apache2 mysql-server php libapache2-mod-php php-mysql

# Configure Apache
sudo nano /etc/apache2/sites-available/media-toolkit.conf

# Enable site
sudo a2ensite media-toolkit
sudo systemctl reload apache2

# Import database
mysql -u root -p < database/setup.sql

# Set permissions
sudo chown -R www-data:www-data /var/www/media-toolkit
sudo chmod -R 755 /var/www/media-toolkit
```

### Environment Configuration

**Production `.env`:**

```env
# Database
DB_HOST=localhost
DB_USER=production_user
DB_PASS=secure_password_here
DB_NAME=media_toolkit_prod

# Email
ADMIN_EMAIL=u18103921@sharjah.ac.ae
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=app_specific_password

# Application
APP_ENV=production
DEBUG_MODE=false
APP_URL=https://yourdomain.com

# Security
SESSION_LIFETIME=7200
CSRF_PROTECTION=true
```

### Pre-Deployment Checklist

**Frontend:**

- [ ] Run production build successfully
- [ ] Test all routes and pages
- [ ] Verify responsive design on multiple devices
- [ ] Check console for errors
- [ ] Validate SEO meta tags
- [ ] Test language switching
- [ ] Verify news feed functionality
- [ ] Check accessibility compliance

**Backend:**

- [ ] Database credentials configured
- [ ] Email service tested
- [ ] API endpoints respond correctly
- [ ] Error logging enabled
- [ ] Security headers configured
- [ ] HTTPS/SSL certificate installed
- [ ] CORS settings appropriate
- [ ] Input validation working
- [ ] SQL injection prevention verified

**SEO & Performance:**

- [ ] Sitemap.xml accessible
- [ ] Robots.txt configured
- [ ] Meta descriptions present
- [ ] Open Graph tags set
- [ ] Page load time < 3 seconds
- [ ] Mobile-friendly test passed
- [ ] Google Search Console setup

---

## Testing

### Manual Testing Checklist

**Functionality Testing:**

- [ ] All 27 pages load without errors
- [ ] Navigation menu works correctly
- [ ] Language switching (EN ↔ AR)
- [ ] Search functionality returns results
- [ ] News feed loads and updates
- [ ] Form submission completes successfully
- [ ] Admin panel accessible and functional
- [ ] AI chatbot responds appropriately

**Cross-Browser Testing:**

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

**Responsive Design Testing:**

- [ ] Desktop (1920x1080, 1366x768)
- [ ] Tablet (768x1024, 1024x768)
- [ ] Mobile (375x667, 414x896)
- [ ] Large displays (2560x1440)

**Performance Testing:**

- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s
- [ ] No console errors
- [ ] Network requests optimized

**Security Testing:**

- [ ] SQL injection attempts blocked
- [ ] XSS attempts sanitized
- [ ] CSRF protection enabled
- [ ] Authentication system secure
- [ ] Sensitive data encrypted

### Database Testing

```bash
# Test connection
php api/test-connection.php

# Test database structure
php api/test-database.php

# Manual SQL verification
mysql -u root -p media_toolkit
SHOW TABLES;
DESCRIBE resource_submissions;
SELECT COUNT(*) FROM resource_submissions;
```

---

## Contributing

Contributions are welcome and appreciated! This project benefits from community involvement.

### How to Contribute

1. **Fork the Repository**

   ```bash
   # Click "Fork" on GitHub 🍴
   ```

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/your-username/media-toolkit-disaster-reporting.git
   cd media-toolkit-disaster-reporting
   ```

3. **Create a Feature Branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

4. **Make Your Changes**
   - ✍️ Write clean, documented code
   - 📏 Follow existing code style
   - 💬 Add comments where necessary
   - 📚 Update documentation if needed

5. **Test Your Changes**
   - 🧪 Run the application locally
   - ✅ Test all affected functionality
   - 🚫 Ensure no breaking changes

6. **Commit Your Changes**

   ```bash
   git add .
   git commit -m "Add: Brief description of your feature"
   ```

7. **Push to Your Fork**

   ```bash
   git push origin feature/amazing-feature
   ```

8. **Open a Pull Request**
   - 🌐 Go to the original repository
   - 🔄 Click "New Pull Request"
   - 📝 Describe your changes in detail
   - 🔗 Link any related issues

### Development Guidelines

**Code Style:**

- Use TypeScript for type safety
- Follow React best practices
- Use functional components and hooks
- Write self-documenting code
- Add JSDoc comments for complex functions

**Commit Message Format:**

```
Type: Brief description

Detailed explanation if necessary

- Change 1
- Change 2

Fixes #issue-number
```

**Types:**

- `Add:` New feature
- `Fix:` Bug fix
- `Update:` Modify existing feature
- `Remove:` Delete feature or code
- `Docs:` Documentation only
- `Style:` Code style/formatting
- `Refactor:` Code restructuring
- `Test:` Adding tests
- `Chore:` Maintenance tasks

**Pull Request Guidelines:**

- 🎯 Keep PRs focused on single feature/fix
- 📸 Include screenshots for UI changes
- 📚 Update documentation
- ✅ Ensure all tests pass
- 👥 Request review from maintainers

### Areas for Contribution

**High Priority:**

- 🌍 Additional language translations (French, Spanish, Chinese)
- ♿ Accessibility improvements (WCAG AAA compliance)
- ⚡ Performance optimizations
- 📱 Mobile app development (React Native)
- 📊 Advanced analytics integration

**Medium Priority:**

- 🔧 Additional tool categories
- 🔐 User authentication system
- ⭐ Rating and review system
- 🌙 Dark mode implementation
- 📲 Progressive Web App features

**Good First Issues:**

- 📚 Documentation improvements
- 🐛 Bug fixes
- 🎨 UI/UX enhancements
- 🧪 Test coverage expansion
- 🌐 Translation updates

---

## Roadmap

### Version 1.0 - Completed ✅

- [x] 27 fully functional pages with complete content
- [x] Bilingual interface (EN/AR) with RTL support
- [x] Dynamic news aggregation from 7 trusted sources
- [x] Full PHP/MySQL backend with RESTful API
- [x] Admin panel for submission management
- [x] AI chatbot integration
- [x] 368+ verified tools across 6 categories
- [x] Comprehensive documentation (7 guides)
- [x] SEO optimization (sitemap, robots.txt, meta tags)
- [x] Responsive design for all devices
- [x] Professional Git workflow implementation

### Version 1.1 - Planned (Q2 2026)

- [ ] **User Authentication System**
  - 🔐 User registration and login
  - 🔄 Password reset functionality
  - ✅ Email verification
  - 👤 Profile management

- [ ] **Enhanced Features**
  - 🔖 Bookmark/favorites system
  - 🔍 Advanced filtering and sorting
  - ⭐ Tool rating and review system
  - 📧 Newsletter subscription
  - 📱 Share to social media

- [ ] **Technical Improvements**
  - 🌙 Dark mode support
  - 📲 PWA capabilities (offline mode)
  - 💾 Advanced caching strategy
  - 📊 Performance monitoring
  - 🐛 Error tracking (Sentry integration)

### Version 2.0 - Future (Q4 2026)

- [ ] **AI & Machine Learning**
  - 🤖 ML-based tool recommendations
  - 🎯 Content personalization
  - 🏷️ Automated content categorization
  - 📊 Sentiment analysis for news

- [ ] **Community Features**
  - ✍️ User-generated content
  - 💬 Discussion forums
  - 👨‍🏫 Expert Q&A section
  - ⭐ Community ratings and reviews

- [ ] **Advanced Functionality**
  - 🤝 Real-time collaboration tools
  - 🌍 Multi-language support (FR, ES, ZH, RU)
  - 🎥 Video tutorials and webinars
  - 💎 Premium/Pro features
  - 🔌 API for third-party integrations

- [ ] **Mobile Development**
  - 📱 Native mobile apps (iOS/Android)
  - 🔔 Push notifications
  - 💾 Offline functionality
  - 📲 Mobile-specific features

### Version 3.0 - Vision (2027)

- [ ] **Enterprise Features**
  - White-label solution for organizations
  - Team collaboration tools
  - Advanced analytics dashboard
  - Custom branding options
  - SLA guarantees

- [ ] **Integration Ecosystem**
  - Fact-checking API integrations
  - Social media platform connections
  - CMS plugins
  - Browser extensions
  - Automated content moderation

**Feature Requests:** [Submit an issue](https://github.com/AhmadDakalbab1/media-toolkit-disaster-reporting/issues) with the tag `enhancement` ✨

---

## Skills Demonstrated

This project showcases comprehensive full-stack development capabilities suitable for professional roles in software engineering, full-stack development, and DevOps.

### Frontend Development

**React Ecosystem:**

- ✅ React 18 with modern patterns (Hooks, Context, Suspense)
- ✅ TypeScript for type-safe development and improved DX
- ✅ Component-driven architecture with 60+ reusable components
- ✅ State management and data flow optimization
- ✅ Client-side routing with Wouter (26+ routes)
- ✅ Performance optimization (lazy loading, code splitting)

**Styling & Design:**

- ✅ Tailwind CSS utility-first approach
- ✅ Responsive design (mobile-first methodology)
- ✅ CSS Grid and Flexbox layouts
- ✅ Animation and transitions (Framer Motion)
- ✅ Consistent design system
- ✅ Accessibility standards (WCAG 2.1)

**Internationalization:**

- ✅ i18next framework integration
- ✅ Dynamic language switching
- ✅ RTL/LTR layout adaptation
- ✅ Persistent language preferences
- ✅ Professional translation management
- ✅ Culturally-appropriate design adaptations
- ✅ SEO optimization for both languages

**API Integration:**

- ✅ RESTful API consumption
- ✅ Asynchronous data fetching
- ✅ Error handling and retry logic
- ✅ CORS and proxy handling
- ✅ Data normalization across sources

### Backend Development

**PHP:**

- ✅ Server-side programming with PHP 8
- ✅ RESTful API design and implementation
- ✅ Input validation and sanitization
- ✅ Error handling and logging
- ✅ Email service integration (PHPMailer)
- ✅ Session management

**Database:**

- ✅ MySQL database design and normalization
- ✅ Complex SQL queries (joins, subqueries, aggregations)
- ✅ Prepared statements (SQL injection prevention)
- ✅ Strategic indexing for performance
- ✅ Database migrations and seeding
- ✅ Data integrity and constraints

**Security:**

- ✅ SQL injection prevention
- ✅ XSS protection
- ✅ CSRF protection implementation
- ✅ Password hashing (bcrypt)
- ✅ Input validation (client & server)
- ✅ Secure session management

### Full-Stack Integration

- ✅ Frontend-backend communication
- ✅ Form handling and validation (dual-layer)
- ✅ Database CRUD operations
- ✅ File upload handling
- ✅ Error handling across stack
- ✅ Admin panel development
- ✅ Real-time data updates

### DevOps & Tools

**Version Control:**

- ✅ Git workflow (branching, merging, rebasing)
- ✅ GitHub repository management
- ✅ Commit message conventions
- ✅ .gitignore best practices

**Build & Development:**

- ✅ Vite build tool configuration
- ✅ Development environment setup
- ✅ Hot module replacement
- ✅ Production builds and optimization
- ✅ Environment variable management

**Testing & QA:**

- ✅ Manual testing procedures
- ✅ Cross-browser testing
- ✅ Responsive design testing
- ✅ API testing
- ✅ Database testing

**Deployment:**

- ✅ Deployment preparation
- ✅ Server configuration
- ✅ SSL/TLS setup understanding
- ✅ SEO optimization
- ✅ Performance monitoring

### Software Engineering

**Architecture:**

- ✅ MVC pattern separation
- ✅ Component-based architecture
- ✅ Repository pattern implementation
- ✅ Modular code organization
- ✅ Scalable project structure

**Best Practices:**

- ✅ Clean code principles
- ✅ DRY (Don't Repeat Yourself)
- ✅ SOLID principles
- ✅ Code documentation
- ✅ Error handling strategies
- ✅ Performance optimization

**Documentation:**

- ✅ Comprehensive README
- ✅ Technical documentation (7 guides)
- ✅ Code comments and JSDoc
- ✅ API documentation
- ✅ Database schema documentation
- ✅ Deployment guides

### Additional Skills

- ✅ Multilingual development (EN/AR with RTL)
- ✅ News aggregation systems
- ✅ AI chatbot integration
- ✅ Admin panel development
- ✅ Email notification systems
- ✅ Search functionality implementation
- ✅ SEO best practices
- ✅ Accessibility compliance

**Perfect for positions in:**

- 💼 Full-Stack Developer
- ⚛️ Frontend Developer (React/TypeScript)
- 🐘 Backend Developer (PHP/MySQL)
- 🔄 DevOps Engineer
- 💻 Software Engineer
- 🌐 Web Developer

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Ahmad Dakalbab

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## Contact

**Ahmad Dakalbab**

📧 Email: [ahmaddakalbab9@gmail.com](mailto:ahmaddakalbab9@gmail.com)  
🐙 GitHub: [@AhmadDakalbab1](https://github.com/AhmadDakalbab1)  
🏫 University: University of Sharjah  
📧 Academic Email: [u18103921@sharjah.ac.ae](mailto:u18103921@sharjah.ac.ae)

**Project Repository:** [https://github.com/AhmadDakalbab1/media-toolkit-disaster-reporting](https://github.com/AhmadDakalbab1/media-toolkit-disaster-reporting)

**Project Status:** Active Development & Maintenance

For questions, suggestions, or collaboration opportunities, feel free to reach out or open an issue on GitHub.

---

## Acknowledgments

### Academic Supervision

**Prof. Qassim** - Project supervisor and technical advisor 👨‍🏫  
**University of Sharjah** - Academic support and resources 🏫  
**College of Communication** - Domain expertise and guidance 📚

### Data Sources & Partners

**Humanitarian Organizations:**

- [UN OCHA ReliefWeb](https://reliefweb.int/) - Humanitarian information service
- [World Health Organization (WHO)](https://www.who.int/) - Global health authority
- [International Federation of Red Cross (IFRC)](https://www.ifrc.org/) - Humanitarian network
- [UNICEF](https://www.unicef.org/) - Children's emergency fund
- [UNHCR](https://www.unhcr.org/) - UN Refugee Agency
- [World Food Programme (WFP)](https://www.wfp.org/) - Food assistance organization
- [Médecins Sans Frontières (MSF)](https://www.msf.org/) - Medical humanitarian organization

### Technologies & Frameworks

**Frontend:**

- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Vite](https://vitejs.dev/) - Next generation build tool
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [i18next](https://www.i18next.com/) - Internationalization framework

**Backend:**

- [PHP](https://www.php.net/) - Server-side scripting
- [MySQL](https://www.mysql.com/) - Relational database
- [Apache](https://httpd.apache.org/) - Web server

**Tools & Libraries:**

- [Lucide Icons](https://lucide.dev/) - Icon library
- [Recharts](https://recharts.org/) - Charting library
- [Wouter](https://github.com/molefrog/wouter) - Minimalist routing
- [Framer Motion](https://www.framer.com/motion/) - Animation library

### Learning Resources

- 📚 [MDN Web Docs](https://developer.mozilla.org/) - Web development documentation
- ⚛️ [React Documentation](https://react.dev/) - Official React guides
- 📘 [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript documentation
- 🐘 [PHP Manual](https://www.php.net/manual/) - PHP documentation
- 🗄️ [MySQL Documentation](https://dev.mysql.com/doc/) - MySQL reference
- 🎓 [freeCodeCamp](https://www.freecodecamp.org/) - Coding education platform
- 💬 [Stack Overflow](https://stackoverflow.com/) - Developer Q&A community

### Special Thanks

- Open-source community for incredible tools and libraries
- Journalists and humanitarian workers who inspired this project
- Beta testers for valuable feedback and suggestions
- Translation contributors for bilingual accuracy
- GitHub for hosting and collaboration tools

### Inspiration

This project was inspired by the critical need for accessible, reliable, and comprehensive resources for journalists and citizens covering humanitarian crises and disasters. It aims to contribute to truth, accuracy, and responsible reporting in challenging circumstances. 🌍✨

---

<div align="center">

### ⭐ Star this repository if it helped you!

![GitHub stars](https://img.shields.io/github/stars/AhmadDakalbab1/media-toolkit-disaster-reporting?style=social)
![GitHub forks](https://img.shields.io/github/forks/AhmadDakalbab1/media-toolkit-disaster-reporting?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/AhmadDakalbab1/media-toolkit-disaster-reporting?style=social)

**Made with dedication for journalists, humanitarian workers, and truth-seekers worldwide**

</div>

---

## Project Statistics

![GitHub repo size](https://img.shields.io/github/repo-size/AhmadDakalbab1/media-toolkit-disaster-reporting)
![GitHub language count](https://img.shields.io/github/languages/count/AhmadDakalbab1/media-toolkit-disaster-reporting)
![GitHub top language](https://img.shields.io/github/languages/top/AhmadDakalbab1/media-toolkit-disaster-reporting)
![GitHub last commit](https://img.shields.io/github/last-commit/AhmadDakalbab1/media-toolkit-disaster-reporting)
![GitHub issues](https://img.shields.io/github/issues/AhmadDakalbab1/media-toolkit-disaster-reporting)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AhmadDakalbab1/media-toolkit-disaster-reporting)

---

**Documentation Version:** 1.0.0  
**Last Updated:** February 14, 2026 📅  
**Maintained By:** Ahmad Dakalbab 👨‍💻  
**Project Status:** ✅ Active Development & Production Ready

## Contributors

- YOUR-USERNAME (practice contributor)
