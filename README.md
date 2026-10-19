# CommunityPulse

**Lightweight browser-based platform for reporting and tracking issues between AAUA students and host-community indigenes (Akungba, Iwaro, Etioro, Ayegunle, etc.)**

**Developer:** Ogunaja Samson Ayomide  
**Matric Number:** 220404117  
**Course:** CSC 426  

---

## Features

| Role | Capabilities |
|------|--------------|
| **Student** | Register → Login → Report issues → Track own reports |
| **Indigene** | View all community reports with live status |
| **Administrator** | Login (admin/admin) → View stats → Update status → Delete reports |

- Categories aligned with Ishikawa analysis: **Methods, People, Technology, Environment**
- Status workflow: Open → In Progress → Resolved
- Fully client-side (HTML + CSS + vanilla JS). No backend. Data resets on page reload.

---

## How to Run

1. Open `index.html` in any modern browser.  
2. Or serve locally:
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`

---

## Project Structure

```
CommunityPulse/
├── index.html
├── css/style.css
├── js/app.js
├── docs/
│   ├── GoogleForm-Questionnaire.md
│   ├── Ishikawa.md
│   ├── UseCase.md
│   └── SRS.md
└── README.md
```

---

## Documentation

| Document | File |
|----------|------|
| Google Form Questionnaire | `docs/GoogleForm-Questionnaire.md` |
| Ishikawa (Fishbone) Analysis | `docs/Ishikawa.md` |
| Use-Case Diagrams | `docs/UseCase.md` |
| Software Requirements Specification (SRS) | `docs/SRS.md` |

---

## Demo Credentials

- **Administrator:** username `admin` / password `admin`
- **Student:** Register any email + password first, then log in.

---

## Notes

This is a differentiated re-implementation of the original multi-role concept with:
- New branding and visual design
- Cleaner code separation
- Updated labels and copy
- Developer identity: Ogunaja Samson Ayomide (220404117)
