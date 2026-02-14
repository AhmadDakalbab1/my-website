# 🌍 Media Toolkit for Disaster Reporting

<div align="center">

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

**A comprehensive bilingual platform empowering journalists, influencers, and citizens with verified tools and resources for effective disaster and crisis reporting.**

[🌐 Live Demo](#) | [📖 Documentation](./docs/) | [🐛 Report Bug](#) | [✨ Request Feature](#)

</div>

---

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Usage Guide](#-usage-guide)
- [API Documentation](#-api-documentation)
- [Database Schema](#-database-schema)
- [Documentation](#-documentation)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Roadmap](#-roadmap)
- [License](#-license)
- [Contact](#-contact)
- [Acknowledgments](#-acknowledgments)

---

## 🎯 About The Project

The **Media Toolkit for Disaster Reporting** is a professional, full-stack web application designed to serve as a comprehensive resource directory for journalists, influencers, and citizens covering disasters and humanitarian crises. Built with modern web technologies and a focus on accessibility, the platform provides curated tools, real-time news aggregation, and expert resources in both English and Arabic.

### 🎓 Academic Context

This project was developed as part of academic requirements at the University of Sharjah, with guidance from Prof. Qassim, focusing on:
- Professional web development practices
- Full-stack development skills
- DevOps principles and deployment
- Real-world application of modern frameworks
- Comprehensive technical documentation

### 🌟 Project Highlights

- **27 fully functional pages** organized into 13 main sections
- **368+ verified tools** across multiple categories
- **Real-time news aggregation** from 7 trusted humanitarian sources
- **Bilingual interface** (English/Arabic) with full RTL support
- **AI-powered chatbot** for user assistance
- **Full-stack implementation** with React frontend and PHP/MySQL backend
- **Admin panel** for content management
- **Production-ready** with SEO optimization

---

## ✨ Key Features

### 🌐 Core Functionality

#### 1. **Comprehensive Resource Directory**
- 📰 **Crisis Reporting** - Guidelines and best practices
- ⚡ **Breaking News Tools** - Real-time verification resources
- ✅ **Verification & Fact-Checking** - 6 specialized sub-sections
  - Image Verification
  - Video Analysis
  - Geolocation Tools
  - Account Verification
  - Fact-Check Databases
  - AI Detection Tools
- 🗺️ **Data & Maps** - Interactive crisis mapping resources
- 🛡️ **Safety & Well-Being** - Journalist safety protocols
- 📚 **Training Resources** - Professional development materials
- 💬 **Risk Communication** - Crisis communication strategies
- 🎯 **For Influencers** - Social media responsibility guidelines
- 👥 **For Citizens** - Community reporting tools

#### 2. **Digital Tools Library (368+ Tools)**
- 🤖 **AI Writing Assistants**
- ⚙️ **Automation & Productivity**
- 🎨 **Media Creation Tools**
- 🔍 **Research & Discovery**
- 🔧 **Technical Tools**
- 🔐 **Verification & Safety Tools**

#### 3. **Dynamic News Aggregation**
Real-time humanitarian news from trusted sources:
- 🌐 **UN OCHA ReliefWeb** (API)
- 🏥 **WHO** (RSS)
- 🔴 **IFRC / Red Cross** (GO API)
- 👶 **UNICEF** (RSS)
- 🏕️ **UNHCR** (RSS)
- 🍽️ **WFP** (RSS)
- 🏥 **MSF Doctors Without Borders** (RSS)

**Advanced Features:**
- Automatic content normalization
- Proxy-based CORS handling
- Smart image placeholder system
- Optional content translation
- Category-based filtering
- Source attribution

#### 4. **Bilingual Experience (EN/AR)**
- 🌍 Complete i18next integration
- ↔️ RTL/LTR automatic switching
- 💾 Persistent language preference (localStorage)
- 🎨 Culturally appropriate design
- 📝 Professional translations (verified with multiple plugins)

#### 5. **User Submission System**
Full-stack resource submission workflow:
- 📝 Comprehensive submission form with validation
- 🔐 Server-side PHP processing with prepared statements
- 💾 MySQL database with status tracking (pending/approved/rejected)
- 📧 Automated email notifications to admin
- 🎛️ Admin panel for reviewing submissions
- 📊 Statistics and filtering capabilities

#### 6. **AI Support Chatbot**
- 🤖 Open-source AI-powered assistance
- 💬 Context-aware responses
- 🌐 Bilingual support
- 📱 Responsive chat interface

#### 7. **Search & Navigation**
- 🔍 Advanced search with resource indexing
- 🏷️ Category-based filtering
- 📍 Breadcrumb navigation
- ⬆️ Back-to-top functionality
- 🔗 Internal and external resource linking

#### 8. **UI/UX Components**
- 🎨 60+ reusable UI components
- 📱 Fully responsive design
- ♿ Accessibility-focused
- 🎭 Consistent design system with Tailwind CSS
- 🚨 Emergency banner system
- 💡 Expert voices section
- 🎯 Quick access shortcuts
- 🏷️ Dynamic page type badges

---

## 🛠️ Tech Stack

### **Frontend**
```
⚛️  React 18             - UI framework
📘 TypeScript           - Type-safe development
⚡ Vite                 - Build tool and dev server
🎨 Tailwind CSS         - Utility-first styling
🌐 i18next              - Internationalization
   react-i18next        - React bindings for i18n
🔀 Wouter               - Lightweight routing (26+ routes)
```

### **Backend**
```
🐘 PHP                  - Server-side processing
🗄️  MySQL                - Relational database
📧 PHPMailer            - Email notifications
🔐 mysqli               - Database connectivity with prepared statements
```

### **Tools & Libraries**
```
🎯 Lucide React         - Icon system
📊 Recharts             - Data visualization
🎠 React Slick          - Carousels
🖼️  React Responsive    - Masonry grids
   Masonry
🎭 Framer Motion        - Animations
🤖 Custom AI Chatbot    - User assistance
```

### **Development & Deployment**
```
📦 npm/pnpm             - Package management
🖥️  WAMP/XAMPP          - Local development server
🔍 ESLint               - Code linting
🎨 Prettier             - Code formatting
📝 Git/GitHub           - Version control
🌐 SEO Ready            - Sitemap, robots.txt
```

---

## 📁 Project Structure

```
media-toolkit/
│
├── 📂 src/
│   ├── 📂 components/           # Reusable React components
│   │   ├── 📂 ui/              # UI primitives (60+ components)
│   │   ├── Navigation.tsx      # Main navigation with language switcher
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Breadcrumbs.tsx     # Navigation breadcrumbs
│   │   ├── SearchBar.tsx       # Advanced search component
│   │   ├── ResourceCard.tsx    # Tool/resource display card
│   │   ├── DynamicNewsFeed.tsx # Multi-source news aggregator
│   │   ├── EmergencyBanner.tsx # Alert system
│   │   ├── ExpertVoices.tsx    # Expert content section
│   │   ├── BackToTop.tsx       # Scroll-to-top button
│   │   ├── PageTypeBadge.tsx   # Dynamic/Static indicator
│   │   └── BilingualText.tsx   # i18n text wrapper
│   │
│   ├── 📂 pages/               # 27 main pages
│   │   ├── HomePage.tsx
│   │   ├── CrisisReporting.tsx
│   │   ├── BreakingNews.tsx
│   │   ├── Verification.tsx
│   │   ├── Tools.tsx
│   │   ├── DataMaps.tsx
│   │   ├── Safety.tsx
│   │   ├── Training.tsx
│   │   ├── RiskCommunication.tsx
│   │   ├── Influencers.tsx
│   │   ├── Citizens.tsx
│   │   ├── About.tsx
│   │   ├── SubmitPage.tsx
│   │   │
│   │   ├── 📂 Verification-Tools/  # 6 specialized pages
│   │   │   ├── ImageVerification.tsx
│   │   │   ├── VideoAnalysis.tsx
│   │   │   ├── Geolocation.tsx
│   │   │   ├── AccountVerification.tsx
│   │   │   ├── FactCheckDatabases.tsx
│   │   │   └── AIDetection.tsx
│   │   │
│   │   └── 📂 Digital-Tools/       # 6 tool categories
│   │       ├── AIWriting.tsx
│   │       ├── Automation.tsx
│   │       ├── MediaCreation.tsx
│   │       ├── Research.tsx
│   │       ├── TechnicalTools.tsx
│   │       └── VerificationSafety.tsx
│   │
│   ├── 📂 locales/             # Internationalization
│   │   ├── en.ts              # English translations
│   │   └── ar.ts              # Arabic translations
│   │
│   ├── 📂 styles/
│   │   └── globals.css        # Global styles & Tailwind config
│   │
│   ├── App.tsx                # Main app with routing (26+ routes)
│   ├── main.tsx               # React entry point
│   ├── i18n.ts                # i18next configuration
│   └── vite-env.d.ts          # TypeScript definitions
│
├── 📂 api/                     # PHP Backend
│   ├── submit-resource.php    # Form submission handler
│   ├── view-submissions.php   # Admin panel
│   ├── test-connection.php    # DB connection test
│   ├── test-database.php      # Database test
│   └── test-form.html         # Form testing utility
│
├── 📂 database/
│   └── setup.sql              # Database schema & seed data
│       ├── Tables: resource_submissions, admin_users
│       ├── Indexes for performance
│       └── Admin user seed
│
├── 📂 docs/                    # Comprehensive documentation
│   ├── 01-php-restful-apis.md
│   ├── 02-mysql-database-connections.md
│   ├── 03-user-authentication-systems.md
│   ├── 04-sql-for-beginners.md
│   ├── 05-git-github-basics.md
│   ├── 06-deployment-guide.md
│   └── 07-full-stack-interview-prep.md
│
├── 📂 wamp-deploy/             # Deployment configuration
├── 📂 wamp-export/             # Export utilities
│
├── 📄 index.html              # HTML entry point
├── 📄 robots.txt              # SEO - Search engine directives
├── 📄 sitemap.xml             # SEO - Site structure
├── 📄 package.json            # Dependencies
├── 📄 tsconfig.json           # TypeScript configuration
├── 📄 vite.config.ts          # Vite configuration
├── 📄 tailwind.config.js      # Tailwind CSS configuration
└── 📄 README.md               # This file
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.x or higher) - [Download](https://nodejs.org/)
- **npm** or **pnpm** - Comes with Node.js
- **WAMP/XAMPP** or similar local server - [WAMP](https://www.wampserver.com/) | [XAMPP](https://www.apachefriends.org/)
- **Git** - [Download](https://git-scm.com/)

### Installation

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/media-toolkit-disaster-reporting.git
cd media-toolkit-disaster-reporting
```

#### 2️⃣ Install Frontend Dependencies

```bash
npm install
# or
pnpm install
```

#### 3️⃣ Set Up the Database

1. Start your WAMP/XAMPP server
2. Open phpMyAdmin (usually at `http://localhost/phpmyadmin`)
3. Create a new database named `media_toolkit`
4. Import the database schema:
   ```sql
   -- Run the SQL file
   source database/setup.sql
   ```
   Or import via phpMyAdmin interface

#### 4️⃣ Configure Backend

1. Update database credentials in `api/submit-resource.php`:
   ```php
   $host = 'localhost';
   $username = 'root';
   $password = '';  // Your MySQL password
   $database = 'media_toolkit';
   ```

2. Update email configuration:
   ```php
   $admin_email = "your-email@example.com";
   ```

#### 5️⃣ Test Database Connection

Visit: `http://localhost/your-project/api/test-connection.php`

You should see: "✅ Connection successful!"

#### 6️⃣ Start Development Server

```bash
npm run dev
# or
pnpm dev
```

The application will open at `http://localhost:5173`

---

## 📖 Usage Guide

### For End Users

#### Browsing Resources
1. Navigate through the main sections using the top navigation menu
2. Use the search bar to find specific tools or resources
3. Toggle between English and Arabic using the language switcher
4. Access the news feed for real-time humanitarian updates

#### Submitting a Resource
1. Click **"Submit a Resource"** in the navigation
2. Fill out the comprehensive form:
   - Personal information (name, email, organization, country)
   - Resource details (type, name, URL)
   - Description and relevant tags
   - Accept the terms and conditions
3. Submit for admin review
4. You'll receive confirmation via email

#### Using the AI Chatbot
1. Click the chat icon in the bottom right
2. Ask questions about disaster reporting
3. Get instant, context-aware responses in your preferred language

### For Administrators

#### Accessing Admin Panel
1. Navigate to `http://localhost/your-project/api/view-submissions.php`
2. Log in with admin credentials
3. View all submissions with filtering options
4. Approve, reject, or mark submissions as pending
5. View statistics and analytics

#### Database Management
- All submissions are stored in the `resource_submissions` table
- Status tracking: `pending`, `approved`, `rejected`
- Automated timestamps for submission tracking
- Email notifications on new submissions

---

## 🔌 API Documentation

### Endpoints

#### `POST /api/submit-resource.php`

Submit a new resource for review.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "organization": "Example Org",
  "country": "United Arab Emirates",
  "resourceType": "tool",
  "resourceName": "Verification Tool",
  "resourceUrl": "https://example.com",
  "description": "A powerful verification tool for journalists",
  "tags": "verification, fact-checking, tools",
  "consent": true
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Resource submitted successfully! We'll review it shortly."
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Error message here"
}
```

**Features:**
- ✅ Email validation
- ✅ URL validation
- ✅ SQL injection prevention (prepared statements)
- ✅ XSS protection
- ✅ Automated email notifications
- ✅ Error logging

#### `GET /api/view-submissions.php`

Admin panel for viewing and managing submissions.

**Query Parameters:**
- `status` - Filter by status (pending/approved/rejected)
- `type` - Filter by resource type
- `search` - Search by keywords

**Authentication:**
- Basic authentication required
- Admin credentials stored in database

---

## 🗄️ Database Schema

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
    INDEX idx_email (email)
);
```

### `admin_users` Table

```sql
CREATE TABLE admin_users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 📚 Documentation

Comprehensive learning materials included in `/docs/`:

| Document | Description | Target Audience |
|----------|-------------|-----------------|
| 📘 [PHP & RESTful APIs](./docs/01-php-restful-apis.md) | Complete guide to building REST APIs with PHP | Backend Developers |
| 🗄️ [MySQL Database Connections](./docs/02-mysql-database-connections.md) | Database connectivity and best practices | Full-Stack Developers |
| 🔐 [User Authentication Systems](./docs/03-user-authentication-systems.md) | Secure authentication implementation | Security-focused Developers |
| 📖 [SQL for Absolute Beginners](./docs/04-sql-for-beginners.md) | SQL fundamentals and queries | Beginners |
| 🌳 [Git & GitHub Basics](./docs/05-git-github-basics.md) | Version control essentials | All Developers |
| 🚀 [Deployment Guide](./docs/06-deployment-guide.md) | Production deployment steps | DevOps Engineers |
| 💼 [Full-Stack Interview Prep](./docs/07-full-stack-interview-prep.md) | Technical interview preparation | Job Seekers |

**Perfect for:**
- 📝 Job application portfolios
- 🎓 Learning full-stack development
- 🛠️ DevOps skill building
- 💼 Technical interviews

---

## 🌐 Deployment

### Frontend Deployment (Netlify/Vercel)

#### Option 1: Netlify

```bash
# Build for production
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

#### Option 2: Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Backend Deployment (Shared Hosting/VPS)

1. **Upload PHP files** to your server's public directory
2. **Import database** via phpMyAdmin or command line:
   ```bash
   mysql -u username -p database_name < database/setup.sql
   ```
3. **Update configuration** in PHP files with production credentials
4. **Configure .htaccess** for clean URLs and security
5. **Set up SSL certificate** (Let's Encrypt recommended)

### Environment Variables

Create `.env` file for production:

```env
# Database
DB_HOST=localhost
DB_USER=your_db_user
DB_PASS=your_db_password
DB_NAME=media_toolkit

# Email
ADMIN_EMAIL=u18103921@sharjah.ac.ae
SMTP_HOST=smtp.example.com
SMTP_PORT=587

# API Keys (if needed)
API_KEY=your_api_key_here
```

### Pre-Deployment Checklist

- ✅ Run `npm run build` successfully
- ✅ Test all forms and API endpoints
- ✅ Verify database connections
- ✅ Check email notifications
- ✅ Test bilingual functionality (EN/AR)
- ✅ Validate SEO meta tags
- ✅ Ensure robots.txt and sitemap.xml are accessible
- ✅ Test on mobile devices
- ✅ Check HTTPS/SSL configuration
- ✅ Verify CORS settings for news feed
- ✅ Test admin panel authentication

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Development Guidelines

- 📝 Follow existing code style and conventions
- ✅ Write clear, descriptive commit messages
- 🧪 Test your changes thoroughly
- 📖 Update documentation as needed
- 🌐 Ensure bilingual support (EN/AR)
- ♿ Maintain accessibility standards
- 🎨 Follow the established design system

### Code Review Process

1. All submissions require review
2. Maintainers will provide feedback
3. Changes may be requested
4. Once approved, your contribution will be merged

---

## 🗺️ Roadmap

### ✅ Completed (Version 1.0)
- [x] 27 fully functional pages
- [x] Bilingual interface (EN/AR) with RTL
- [x] Dynamic news feed from 7 sources
- [x] Full PHP/MySQL backend
- [x] Admin panel for submissions
- [x] AI chatbot integration
- [x] 368+ verified tools
- [x] Comprehensive documentation
- [x] SEO optimization

### 🔜 Upcoming Features (Version 1.1)
- [ ] User authentication system (login/register)
- [ ] Bookmark/favorites functionality
- [ ] Advanced filtering and sorting
- [ ] Tool rating and review system
- [ ] Newsletter subscription
- [ ] Dark mode support
- [ ] PWA (Progressive Web App) capabilities
- [ ] Advanced analytics dashboard
- [ ] API for third-party integrations
- [ ] Mobile app (React Native)

### 💡 Future Enhancements (Version 2.0)
- [ ] Machine learning-based tool recommendations
- [ ] Real-time collaboration features
- [ ] Multi-language support (FR, ES, ZH)
- [ ] Video tutorials and webinars
- [ ] Community forum
- [ ] Premium/Pro features
- [ ] Integration with fact-checking APIs
- [ ] Automated content moderation

**Want to suggest a feature?** [Open an issue](https://github.com/yourusername/media-toolkit-disaster-reporting/issues) with the tag "enhancement"

---

## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.

```
MIT License

Copyright (c) 2026 [Your Name]

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

## 👤 Contact

**Your Name**  
📧 Email: [u18103921@sharjah.ac.ae](mailto:u18103921@sharjah.ac.ae)  
🔗 LinkedIn: [Your LinkedIn Profile](#)  
🐙 GitHub: [@yourusername](https://github.com/yourusername)  
🌐 Portfolio: [yourwebsite.com](#)

**Project Link:** [https://github.com/yourusername/media-toolkit-disaster-reporting](https://github.com/yourusername/media-toolkit-disaster-reporting)

---

## 🙏 Acknowledgments

### Academic Guidance
- **Prof. Qassim** - Project supervision and guidance
- **University of Sharjah** - Academic support and resources

### Trusted Data Sources
- 🌐 [UN OCHA ReliefWeb](https://reliefweb.int/) - Humanitarian information
- 🏥 [World Health Organization (WHO)](https://www.who.int/) - Health crisis data
- 🔴 [International Federation of Red Cross (IFRC)](https://www.ifrc.org/) - Disaster response
- 👶 [UNICEF](https://www.unicef.org/) - Children in crisis
- 🏕️ [UNHCR](https://www.unhcr.org/) - Refugee information
- 🍽️ [World Food Programme (WFP)](https://www.wfp.org/) - Food security
- 🏥 [Médecins Sans Frontières (MSF)](https://www.msf.org/) - Medical emergencies

### Technologies & Frameworks
- ⚛️ [React](https://react.dev/) - UI framework
- 📘 [TypeScript](https://www.typescriptlang.org/) - Type safety
- ⚡ [Vite](https://vitejs.dev/) - Build tool
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - Styling
- 🌐 [i18next](https://www.i18next.com/) - Internationalization
- 🐘 [PHP](https://www.php.net/) - Backend
- 🗄️ [MySQL](https://www.mysql.com/) - Database

### Resources & Tools
- 🎯 [Lucide Icons](https://lucide.dev/) - Icon system
- 📸 [Unsplash](https://unsplash.com/) - Stock imagery
- 📚 [MDN Web Docs](https://developer.mozilla.org/) - Web development reference
- 🎓 [freeCodeCamp](https://www.freecodecamp.org/) - Learning resources

### Special Thanks
- 🌟 Open-source community for incredible tools and libraries
- 💡 Journalists and humanitarian workers who inspired this project
- 🤝 Beta testers and early users for valuable feedback
- 📖 Technical writers and documentation contributors

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/yourusername/media-toolkit-disaster-reporting)
![GitHub stars](https://img.shields.io/github/stars/yourusername/media-toolkit-disaster-reporting?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/media-toolkit-disaster-reporting?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/media-toolkit-disaster-reporting)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/media-toolkit-disaster-reporting)

---

## 🎖️ Skills Demonstrated

This project showcases proficiency in:

### **Frontend Development**
✅ React 18 with Hooks and modern patterns  
✅ TypeScript for type-safe development  
✅ Component-driven architecture (60+ components)  
✅ State management and data flow  
✅ Responsive design with Tailwind CSS  
✅ Internationalization (i18next) with RTL support  
✅ Client-side routing (Wouter)  
✅ API integration and data fetching  
✅ Performance optimization  

### **Backend Development**
✅ PHP server-side programming  
✅ RESTful API design and implementation  
✅ MySQL database design and management  
✅ SQL queries with prepared statements  
✅ Input validation and sanitization  
✅ Security best practices (XSS, SQL injection prevention)  
✅ Email integration (PHPMailer)  
✅ Session and authentication management  

### **Full-Stack Integration**
✅ Frontend-backend communication  
✅ Form handling and validation (client + server)  
✅ Database CRUD operations  
✅ Error handling and logging  
✅ Admin panel development  

### **DevOps & Deployment**
✅ Version control with Git/GitHub  
✅ Build tools and bundling (Vite)  
✅ Development environment setup (WAMP/XAMPP)  
✅ SEO optimization (sitemap, robots.txt)  
✅ Deployment preparation  
✅ Documentation and testing utilities  

### **Software Engineering**
✅ Project architecture and organization  
✅ Code reusability and modularity  
✅ Clean code principles  
✅ Technical documentation  
✅ Accessibility standards  
✅ Cross-browser compatibility  
✅ Performance optimization  

---

<div align="center">

### 🌟 If this project helped you, please give it a star! ⭐

**Made with ❤️ for journalists, humanitarian workers, and truth-seekers worldwide**

</div>

---

## 📸 Screenshots

> **Note:** Add screenshots here to showcase your project's interface

### Home Page
![Home Page Screenshot](#)

### News Feed
![News Feed Screenshot](#)

### Resource Directory
![Resource Directory Screenshot](#)

### Bilingual Support (EN/AR)
![Bilingual Support Screenshot](#)

### Admin Panel
![Admin Panel Screenshot](#)

### Mobile Responsive
![Mobile View Screenshot](#)

---

## 🔖 Keywords

`disaster-reporting` `journalism-tools` `crisis-communication` `fact-checking` `verification-tools` `humanitarian-news` `bilingual-website` `react-typescript` `full-stack-development` `php-mysql` `news-aggregation` `media-toolkit` `arabic-rtl` `i18next` `vite` `tailwind-css` `open-source` `university-project` `devops` `web-development`

---

**Last Updated:** February 14, 2026  
**Version:** 1.0.0  
**Status:** Active Development ✅
