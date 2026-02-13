# VitalMind.ai - Intelligent Healthcare Assistant

## 📋 Project Overview

**VitalMind.ai** is a responsive web-based healthcare platform featuring secure user authentication, personalized health dashboard, and interactive image gallery. Built with Bootstrap framework and localStorage for client-side data management.

### Purpose
- Secure user authentication and registration
- Personalized health information dashboard
- Interactive medical image gallery
- Responsive design across all devices
- Client-side data persistence using localStorage

---

## 👥 Team Members & Contributions

| # | Name | Role | Files Created | Lines of Code |
|---|------|------|---------------|---------------|
| 1 | **Apurva Raj** | Team Lead & Authentication | index.html, login.css, auth.js | ~650 |
| 2 | **Gowri Chandran** | Validation Lead | register.html, register.css, validation.js | ~720 |
| 3 | **Harshitha Kasu** | Frontend Lead | dashboard.html, dashboard.css, dashboard.js | ~850 |
| 4 | **Jiamin Jiang** | Gallery & Documentation | gallery.html, gallery.css, gallery.js, README.md | ~680 |

**Total Lines of Code**: ~2,900+ lines

---

## 📦 Bootstrap Components Used (27+ Total)

### Navigation Components (6)
1. **Navbar** - Responsive navigation bar
2. **Navbar Brand** - Logo and branding
3. **Navbar Toggler** - Mobile hamburger menu
4. **Collapse** - Collapsible navigation
5. **Nav** - Navigation links
6. **Nav Pills** - Gallery category tabs

### Content Components (8)
7. **Card** - Content containers
8. **Card Header** - Card titles
9. **Card Body** - Card content
10. **Alert** - Messages and notifications
11. **Badge** - Status indicators
12. **List Group** - Activity lists
13. **Table** - Appointments table
14. **Modal** - Image lightbox

### Form Components (7)
15. **Form** - User input forms
16. **Form Control** - Input fields
17. **Form Label** - Field labels
18. **Input Group** - Grouped inputs
19. **Form Check** - Checkboxes
20. **Form Text** - Helper text
21. **Progress Bar** - Form completion

### Interactive Components (4)
22. **Button** - Action buttons
23. **Button Group** - Grouped buttons
24. **Dropdown** - Dropdown menus
25. **Dropdown Menu** - Menu items

### Layout Components (2)
26. **Grid System** - Rows and columns
27. **Container** - Page containers

### Additional Features
- **Utilities** - Spacing, colors, typography, shadows
- **Responsive Utilities** - Display utilities (d-none, d-md-block)

---

## 📂 Project Structure
```
vitalmind-ai/
├── index.html                      # Login page (Apurva Raj)
├── register.html                   # Registration page (Gowri Chandran)
├── dashboard.html                  # Dashboard page (Harshitha Kasu)
├── gallery.html                    # Image gallery (Jiamin Jiang)
│
├── css/
│   ├── login.css                  # Login styles (Apurva Raj)
│   ├── register.css               # Registration styles (Gowri Chandran)
│   ├── dashboard.css              # Dashboard styles (Harshitha Kasu)
│   └── gallery.css                # Gallery styles (Jiamin Jiang)
│
├── js/
│   ├── auth.js                    # Authentication (Apurva Raj)
│   ├── validation.js              # Validation (Gowri Chandran)
│   ├── dashboard.js               # Dashboard (Harshitha Kasu)
│   └── gallery.js                 # Gallery (Jiamin Jiang)
│
├── assets/
│   └── images/
│       ├── favicon.ico            # Browser favicon (16x16, 32x32)
│       ├── favicon.png            # PNG favicon (192x192)
│       ├── logo.png               # Main logo (color version)
│       ├── logo-white.png         # White logo (for dark backgrounds)
│       ├── hero-health.png        # Login page hero image
│       ├── icon-secure.png        # Security icon (50x50)
│       ├── icon-health.png        # Health monitoring icon (50x50)
│       ├── icon-mobile.png        # Mobile access icon (50x50)
│       ├── avatar-login.png       # Login avatar (100x100)
│       ├── avatar-register.png    # Register avatar (100x100)
│       ├── dashboard-banner.jpg   # Dashboard banner (1200x200)
│       ├── stat-appointments.png  # Appointments icon (80x80)
│       ├── stat-health.png        # Health score icon (80x80)
│       ├── stat-prescriptions.png # Prescriptions icon (80x80)
│       ├── stat-records.png       # Records icon (80x80)
│       ├── doctor-sarah.jpg       # Dr. Sarah photo (300x300)
│       ├── doctor1.jpg            # Doctor thumbnail (40x40)
│       ├── doctor2.jpg            # Doctor thumbnail (40x40)
│       ├── doctor3.jpg            # Doctor thumbnail (40x40)
│       ├── action-appointment.png # Action icon (60x60)
│       ├── action-prescription.png# Action icon (60x60)
│       ├── action-lab.png         # Action icon (60x60)
│       ├── action-gallery.png     # Action icon (60x60)
│       ├── metric-bp.png          # BP metric icon (24x24)
│       ├── metric-heart.png       # Heart rate icon (24x24)
│       ├── metric-temp.png        # Temperature icon (24x24)
│       ├── activity-bp.png        # Activity icon (45x45)
│       ├── activity-pills.png     # Activity icon (45x45)
│       ├── activity-lab.png       # Activity icon (45x45)
│       ├── activity-check.png     # Activity icon (45x45)
│       ├── tip-water.png          # Health tip icon (40x40)
│       ├── tip-exercise.png       # Health tip icon (40x40)
│       ├── tip-sleep.png          # Health tip icon (40x40)
│       ├── user-avatar.png        # User profile pic (32x32)
│       └── gallery/
│           ├── hospital-exterior.jpg    # Gallery image (800x600)
│           ├── emergency-room.jpg       # Gallery image (800x600)
│           ├── patient-room.jpg         # Gallery image (800x600)
│           ├── operating-room.jpg       # Gallery image (800x600)
│           ├── waiting-area.jpg         # Gallery image (800x600)
│           ├── laboratory.jpg           # Gallery image (800x600)
│           ├── doctor-sarah.jpg         # Gallery image (600x600)
│           ├── doctor-michael.jpg       # Gallery image (600x600)
│           ├── doctor-emily.jpg         # Gallery image (600x600)
│           ├── doctor-james.jpg         # Gallery image (600x600)
│           ├── yoga-class.jpg           # Gallery image (800x600)
│           ├── nutrition.jpg            # Gallery image (800x600)
│           ├── fitness-center.jpg       # Gallery image (800x600)
│           ├── ai-diagnosis.jpg         # Gallery image (800x600)
│           ├── telemedicine.jpg         # Gallery image (800x600)
│           └── medical-equipment.jpg    # Gallery image (800x600)
│
├── .gitignore
└── README.md                       # Documentation (Jiamin Jiang)
```

---

## 🖼️ Image Requirements & Specifications

### Required Images

#### **Branding Images**
```
📁 assets/images/

1. favicon.ico          - 16x16, 32x32, 48x48 (multi-size ICO)
2. favicon.png          - 192x192 PNG (high-res)
3. logo.png             - 200x60 PNG (transparent background)
4. logo-white.png       - 200x60 PNG (white version for dark bg)
```

#### **Page-Specific Images**

**Login Page (Member 1 - Apurva):**
```
5. hero-health.png      - 600x400 PNG (healthcare illustration)
6. icon-secure.png      - 50x50 PNG (security icon)
7. icon-health.png      - 50x50 PNG (health monitoring icon)
8. icon-mobile.png      - 50x50 PNG (mobile device icon)
9. avatar-login.png     - 100x100 PNG (login user avatar)
```

**Registration Page (Member 2 - Gowri):**
```
10. avatar-register.png - 100x100 PNG (registration avatar)
```

**Dashboard Page (Member 3 - Harshitha):**
```
11. dashboard-banner.jpg     - 1200x200 JPG (banner image)
12. stat-appointments.png    - 80x80 PNG (calendar icon)
13. stat-health.png          - 80x80 PNG (heartbeat icon)
14. stat-prescriptions.png   - 80x80 PNG (pill bottle icon)
15. stat-records.png         - 80x80 PNG (medical file icon)
16. doctor-sarah.jpg         - 300x300 JPG (doctor photo)
17. doctor1.jpg              - 40x40 JPG (thumbnail)
18. doctor2.jpg              - 40x40 JPG (thumbnail)
19. doctor3.jpg              - 40x40 JPG (thumbnail)
20. action-appointment.png   - 60x60 PNG (calendar icon)
21. action-prescription.png  - 60x60 PNG (prescription icon)
22. action-lab.png           - 60x60 PNG (lab flask icon)
23. action-gallery.png       - 60x60 PNG (image gallery icon)
24. metric-bp.png            - 24x24 PNG (blood pressure icon)
25. metric-heart.png         - 24x24 PNG (heart icon)
26. metric-temp.png          - 24x24 PNG (thermometer icon)
27. activity-bp.png          - 45x45 PNG (BP activity icon)
28. activity-pills.png       - 45x45 PNG (pills icon)
29. activity-lab.png         - 45x45 PNG (lab icon)
30. activity-check.png       - 45x45 PNG (checkmark icon)
31. tip-water.png            - 40x40 PNG (water glass icon)
32. tip-exercise.png         - 40x40 PNG (running icon)
33. tip-sleep.png            - 40x40 PNG (moon icon)
34. user-avatar.png          - 32x32 PNG (default user avatar)
```

**Gallery Page (Member 4 - Jiamin):**
```
📁 assets/images/gallery/

35. hospital-exterior.jpg    - 800x600 JPG (building exterior)
36. emergency-room.jpg       - 800x600 JPG (ER room)
37. patient-room.jpg         - 800x600 JPG (hospital room)
38. operating-room.jpg       - 800x600 JPG (OR suite)
39. waiting-area.jpg         - 800x600 JPG (waiting lounge)
40. laboratory.jpg           - 800x600 JPG (lab facility)
41. doctor-sarah.jpg         - 600x600 JPG (doctor portrait)
42. doctor-michael.jpg       - 600x600 JPG (doctor portrait)
43. doctor-emily.jpg         - 600x600 JPG (doctor portrait)
44. doctor-james.jpg         - 600x600 JPG (doctor portrait)
45. yoga-class.jpg           - 800x600 JPG (yoga session)
46. nutrition.jpg            - 800x600 JPG (healthy food)
47. fitness-center.jpg       - 800x600 JPG (gym equipment)
48. ai-diagnosis.jpg         - 800x600 JPG (AI technology)
49. telemedicine.jpg         - 800x600 JPG (video consultation)
50. medical-equipment.jpg    - 800x600 JPG (medical devices)
```

**Total Images Required: 50**

---

## 🎨 Where to Get Free Images

### Recommended Free Stock Photo Sites

1. **Unsplash** - https://unsplash.com/
   - Search: "hospital", "doctor", "medical", "healthcare"
   - High-quality, free to use

2. **Pexels** - https://pexels.com/
   - Search: "health", "medical facility", "wellness"
   - No attribution required

3. **Pixabay** - https://pixabay.com/
   - Search: "healthcare", "clinic", "doctor"
   - Completely free

4. **Freepik** - https://www.freepik.com/
   - Icons and illustrations
   - Free with attribution

5. **Flaticon** - https://www.flaticon.com/
   - Icons (for stat-*, action-*, metric-* images)
   - PNG format available

### For Favicon

**Online Favicon Generators:**
- https://favicon.io/ - Convert text/image to favicon
- https://realfavicongenerator.net/ - Generate all sizes
- https://www.favicon-generator.org/ - Simple generator

**Simple Emoji Favicon** (No download needed):
```html
<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💚</text></svg>">
```

---

## 📥 Image Download Checklist

### For Member 1 (Apurva Raj):
```
□ favicon.ico
□ favicon.png
□ logo.png
□ logo-white.png
□ hero-health.png
□ icon-secure.png
□ icon-health.png
□ icon-mobile.png
□ avatar-login.png
```

### For Member 2 (Gowri Chandran):
```
□ avatar-register.png
□ (Uses same logo files as Member 1)
```

### For Member 3 (Harshitha Kasu):
```
□ dashboard-banner.jpg
□ stat-appointments.png
□ stat-health.png
□ stat-prescriptions.png
□ stat-records.png
□ doctor-sarah.jpg
□ doctor1.jpg, doctor2.jpg, doctor3.jpg
□ action-appointment.png
□ action-prescription.png
□ action-lab.png
□ action-gallery.png
□ metric-bp.png, metric-heart.png, metric-temp.png
□ activity-bp.png, activity-pills.png, activity-lab.png, activity-check.png
□ tip-water.png, tip-exercise.png, tip-sleep.png
□ user-avatar.png
```

### For Member 4 (Jiamin Jiang):
```
□ All 16 gallery images in assets/images/gallery/
   - 6 facility images
   - 4 doctor images
   - 3 wellness images
   - 3 technology images
```

---

## 🚀 Installation & Setup

### Prerequisites
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Git installed
- Text editor (VS Code recommended)

### Step 1: Clone Repository
```bash
git clone https://github.com/your-team/vitalmind-ai.git
cd vitalmind-ai
```

### Step 2: Add Images

Download images from free stock sites and place them in:
- `assets/images/` - Main images
- `assets/images/gallery/` - Gallery images

### Step 3: Run Project

**Option A: Direct Browser**
```bash
# Open index.html in browser
```

**Option B: Python Server**
```bash
python -m http.server 8000
# Visit: http://localhost:8000
```

**Option C: VS Code Live Server**
```bash
# Install Live Server extension
# Right-click index.html → Open with Live Server
```

### Demo Credentials
```
Email: demo@vitalmind.ai
Password: Demo@123
```

---

## ✅ Form Validation

### Login Page (index.html)
- **Email**: Required, valid email format
- **Password**: Required, minimum 8 characters
- **Error Display**: Below each field with red styling
- **Success Feedback**: Green alert on successful login

### Registration Page (register.html)
- **Full Name**: Required, 3+ characters, letters and spaces only
- **Email**: Required, valid format, uniqueness check against localStorage
- **Password**: Required, 8+ characters with:
  - Uppercase letter
  - Lowercase letter
  - Number
  - Special character
- **Confirm Password**: Must exactly match password
- **Terms**: Required checkbox
- **Password Strength Indicator**: Visual bar (Weak/Medium/Strong)
- **Progress Bar**: Shows % of form completion

---

## 💾 LocalStorage Database

### Data Structure
```javascript
// vitalMindUsers - All registered users
[
  {
    "id": "user_1707654321_abc123",
    "name": "Apurva Raj",
    "email": "apurva.raj@university.edu",
    "password": "SecurePass@123",
    "createdAt": "2026-02-11T10:00:00Z"
  }
]

// currentUser - Active session
{
  "id": "user_1707654321_abc123",
  "name": "Apurva Raj",
  "email": "apurva.raj@university.edu",
  "loginTime": "2026-02-11T14:30:00Z",
  "rememberMe": true
}
```

### Authentication Flow
```
Registration:
1. User fills form → Validation → Save to vitalMindUsers → Redirect to login

Login:
2. User enters credentials → Validate against vitalMindUsers → Create currentUser session → Redirect to dashboard

Dashboard:
3. Check currentUser exists → Load user data → Display personalized content

Logout:
4. Remove currentUser → Redirect to login
```

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 576px (Single column, stacked layout)
- **Tablet**: 768px - 991px (2-column grid)
- **Desktop**: 992px+ (Multi-column, full layout)

### Responsive Features
- Bootstrap grid system (col-*, col-md-*, col-lg-*)
- Collapsible navbar on mobile
- Touch-friendly buttons (min 44x44px)
- Responsive images (img-fluid class)
- Adaptive typography
- Mobile-optimized gallery grid

---

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Full Support |
| Firefox | 88+ | ✅ Full Support |
| Safari | 14+ | ✅ Full Support |
| Edge | 90+ | ✅ Full Support |

❌ **Not Supported**: Internet Explorer

---

## 🛠️ Technologies

- **HTML5** - Structure
- **CSS3** - Styling
- **JavaScript ES6+** - Logic
- **Bootstrap 5.3.2** - Framework
- **Font Awesome 6.4.0** - Icons
- **LocalStorage API** - Data persistence

---

## 📸 Image Fallback System

All images have automatic fallbacks:
- Missing images replaced with SVG placeholders
- Font Awesome icons as backup
- Gradient backgrounds for visual appeal
- No broken image icons displayed

---

## 📞 Contact

**GitHub**: https://github.com/your-team/vitalmind-ai

**Team**:
- Apurva Raj - apurva.raj@university.edu
- Gowri Chandran - gowri.chandran@university.edu
- Harshitha Kasu - harshitha.kasu@university.edu
- Jiamin Jiang - jiamin.jiang@university.edu

---

## 📜 License

MIT License - Educational Project

---

## ⚠️ Disclaimer

Educational project for web development course. Not for actual medical use. Always consult healthcare professionals for medical advice.

---

**Developed with 💚 by Team VitalMind | February 2026**
```

---

# 📋 COMPLETE IMAGE PLACEHOLDER LIST

## 📁 Image File Structure

Create this exact folder structure:
```
assets/
└── images/
    ├── favicon.ico
    ├── favicon.png
    ├── logo.png
    ├── logo-white.png
    ├── hero-health.png
    ├── icon-secure.png
    ├── icon-health.png
    ├── icon-mobile.png
    ├── avatar-login.png
    ├── avatar-register.png
    ├── dashboard-banner.jpg
    ├── stat-appointments.png
    ├── stat-health.png
    ├── stat-prescriptions.png
    ├── stat-records.png
    ├── doctor-sarah.jpg
    ├── doctor1.jpg
    ├── doctor2.jpg
    ├── doctor3.jpg
    ├── action-appointment.png
    ├── action-prescription.png
    ├── action-lab.png
    ├── action-gallery.png
    ├── metric-bp.png
    ├── metric-heart.png
    ├── metric-temp.png
    ├── activity-bp.png
    ├── activity-pills.png
    ├── activity-lab.png
    ├── activity-check.png
    ├── tip-water.png
    ├── tip-exercise.png
    ├── tip-sleep.png
    ├── user-avatar.png
    └── gallery/
        ├── hospital-exterior.jpg
        ├── emergency-room.jpg
        ├── patient-room.jpg
        ├── operating-room.jpg
        ├── waiting-area.jpg
        ├── laboratory.jpg
        ├── doctor-sarah.jpg
        ├── doctor-michael.jpg
        ├── doctor-emily.jpg
        ├── doctor-james.jpg
        ├── yoga-class.jpg
        ├── nutrition.jpg
        ├── fitness-center.jpg
        ├── ai-diagnosis.jpg
        ├── telemedicine.jpg
        └── medical-equipment.jpg
