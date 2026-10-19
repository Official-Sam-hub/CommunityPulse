# Software Requirements Specification (SRS)  
## CommunityPulse – Issues Reporting Platform

**Version:** 1.0 (Mini Prototype)  
**Date:** October 2026  
**Developer:** Ogunaja Samson Ayomide  
**Matric Number:** 220404117  
**Course:** CSC 426  
**Institution Context:** Adekunle Ajasin University (AAUA) & Host Communities (Akungba, Iwaro, Etioro, Ayegunle, etc.)

---

## 1. Introduction

### 1.1 Purpose
This document specifies the functional and non-functional requirements of **CommunityPulse**, a lightweight browser-based web application that enables AAUA students and host-community indigenes to report, view and track issues affecting their shared environment and relationship.

### 1.2 Scope
**In scope (mini prototype):**
- Role-based access: Student, Indigene, Administrator
- Student registration and login
- Issue reporting with categorisation
- Personal and public report listing
- Administrator status updates and deletion
- Client-side only (in-memory storage)

**Out of scope for this version:**
- Persistent database
- Real authentication server
- Email/SMS notifications
- File/image uploads
- Mobile native applications

### 1.3 Definitions
| Term          | Meaning                                      |
|---------------|----------------------------------------------|
| AAUA          | Adekunle Ajasin University, Akungba-Akoko    |
| Student       | Registered AAUA student user                 |
| Indigene      | Resident of the host communities             |
| Administrator | Privileged user who manages all reports      |
| Report        | An issue submitted through the platform      |

---

## 2. Overall Description

### 2.1 Product Perspective
CommunityPulse is a standalone front-end web application. All data is held in browser memory and is lost on page reload. It serves as a demonstrable prototype of a multi-stakeholder issue-reporting system.

### 2.2 User Classes
| User Class     | Characteristics                          | Primary Functions                     |
|----------------|------------------------------------------|---------------------------------------|
| Student        | Temporary resident, mobile-first         | Register, login, report, track own    |
| Indigene       | Permanent resident, varied digital skill | View all public reports               |
| Administrator  | Official or designated manager           | View stats, update status, delete     |

### 2.3 Operating Environment
- Modern web browsers (Chrome, Firefox, Edge, Safari)
- Responsive design (mobile and desktop)
- No server or database required for the prototype

### 2.4 Constraints
- Keep complexity low for academic submission timeline
- No external libraries beyond standard browser APIs
- Demo credentials for administrator: `admin` / `admin`

---

## 3. Functional Requirements

### FR-1: Role Selection
The system shall present three distinct roles on the landing page: Student, Indigene and Administrator.

### FR-2: Student Registration
The system shall allow a new student to create an account by providing full name, email and password (minimum 4 characters). Duplicate emails shall be rejected.

### FR-3: Student Login
The system shall authenticate a student using email and password and grant access to the personal dashboard.

### FR-4: Issue Reporting
A logged-in student shall be able to submit a report containing:
- Title
- Category (Methods, People, Technology, Environment)
- Description  
New reports shall be created with status “Open”.

### FR-5: Track Own Reports
A logged-in student shall see only the reports they have submitted, including current status and date.

### FR-6: View Community Issues
Any user selecting the Indigene role shall be able to view the complete list of reports with category, status, date and reporter name.

### FR-7: Administrator Authentication
The system shall allow login with the fixed demo credentials (admin / admin).

### FR-8: Administrator Dashboard
The administrator shall see:
- Summary statistics (Total, Open, In Progress, Resolved)
- Full list of all reports
- Ability to change the status of any report
- Ability to delete any report

### FR-9: Status Workflow
Supported statuses: Open → In Progress → Resolved.

---

## 4. Non-Functional Requirements

### 4.1 Usability
- NFR-1: Interface shall be usable on screens from 320 px width upward.
- NFR-2: Clear labels, required-field validation and immediate feedback on form submission.
- NFR-3: Simple English suitable for mixed literacy levels.

### 4.2 Performance
- NFR-4: Page transitions and form responses shall feel instantaneous (client-side only).

### 4.3 Reliability
- NFR-5: Client-side validation prevents submission of empty required fields.
- NFR-6: Data exists only for the duration of the browser session (explicitly documented).

### 4.4 Security & Privacy (Prototype Level)
- NFR-7: Passwords are stored only in browser memory (not suitable for production).
- NFR-8: No data is transmitted to an external server in the current version.

### 4.5 Maintainability
- NFR-9: Code separated into HTML, CSS and JavaScript files.
- NFR-10: Clear naming and comments for future extension.

### 4.6 Portability
- NFR-11: Runs in any standards-compliant modern browser without installation.

---

## 5. System Architecture (High-Level)

```
[Browser]
    │
    ├── index.html          (structure & views)
    ├── css/style.css       (presentation)
    └── js/app.js           (application logic & in-memory data)
```

No backend component exists in the mini prototype.

---

## 6. External Interfaces

### 6.1 User Interface
- Landing page with role cards
- Registration and login forms
- Student dashboard (report form + personal list)
- Indigene public list
- Administrator dashboard with statistics and management controls

### 6.2 Hardware / Software Interfaces
- Standard web browser
- No special hardware required

---

## 7. Data Requirements (Prototype)
- Students: name, email, password
- Reports: id, title, category, description, reporter email, reporter name, status, date

All data structures are held in JavaScript arrays and are discarded when the page is closed or refreshed.

---

## 8. Appendices

### Appendix A – Issue Categories
1. Methods — process & reporting channels  
2. People — awareness & participation  
3. Technology — access & digital tools  
4. Environment — roads, power, safety, housing  

### Appendix B – Status Values
- Open  
- In Progress  
- Resolved  

---

**Document Control**  
Author: Ogunaja Samson Ayomide (220404117)  
Purpose: Academic submission – CSC 426  
Status: Complete for mini prototype scope
