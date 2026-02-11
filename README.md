# VitalMind.ai - Intelligent Healthcare Assistant

## 📋 Project Overview

**VitalMind.ai** is a web-based healthcare platform that provides user authentication and health dashboard functionality using Bootstrap framework and localStorage for data management.

### Purpose
- Secure user authentication system
- Health information dashboard
- Responsive design across all devices

---

## 👥 Team Members

| Member | Name | Responsibility |
|--------|------|----------------|
| 1 | Apurva Raj | Login page, authentication system |
| 2 | Gowri Chandran | Registration page, form validation |
| 3 | Harshitha Kasu | Dashboard/landing page(HTML) |
| 4 | Jiamin Jiang | Dashboard/landing page(CSS, Script)Integration, final testing |

---

## 📦 Bootstrap Components Used (16 Total)

1. **Navbar** - Navigation bar
2. **Navbar Toggler** - Mobile menu toggle
3. **Card** - Content containers
4. **Form** - User input forms
5. **Input Group** - Input with icons
6. **Button** - Action buttons
7. **Alert** - Success/error messages
8. **Form Check** - Checkboxes
9. **Dropdown** - User menu dropdown
10. **List Group** - Activity list
11. **Badge** - Status indicators
12. **Grid System** - Responsive layout (row/col)
13. **Utilities** - Spacing, colors, shadows
14. **Collapse** - Navbar collapse
15. **Button Group** - Input group buttons
16. **Dropdown Menu** - User profile menu

---

## 📂 Project Structure
```
6150-group1_Assignment/
├── index.html              # Login page
├── register.html           # Registration page
├── dashboard.html          # Dashboard/Landing page
├── css/
│   ├── login.css
│   ├── register.css
│   └── dashboard.css
├── js/
│   ├── auth.js
│   ├── validation.js
│   └── dashboard.js
└── README.md
```

---

## 🚀 How to Run

1. **Download/Clone** the project
2. **Open `index.html`** in your web browser
3. **Demo credentials**: 
   - Email: `demo@vitalmind.ai`
   - Password: `Demo@123`

**OR** use a local server:
```bash
# Python
python -m http.server 8000

# Access at: http://localhost:8000
```

---

## ✅ Form Validation

### Login Page
- Email format validation
- Password minimum 8 characters
- Real-time error messages

### Registration Page
- Name: minimum 3 characters
- Email: valid format, uniqueness check
- Password: minimum 8 characters
- Confirm password must match
- Terms acceptance required

---

## 💾 LocalStorage Authentication

### User Flow
1. **Registration**: User fills form → Data saved to `vitalMindUsers` in localStorage
2. **Login**: Credentials validated against localStorage → Session created in `currentUser`
3. **Dashboard**: Protected page checks for `currentUser` session
4. **Logout**: Session cleared from localStorage

### Data Structure
```javascript
// vitalMindUsers - Array of registered users
[{
  id: "user_timestamp",
  name: "User Name",
  email: "user@email.com",
  password: "password123",
  createdAt: "ISO timestamp"
}]

// currentUser - Active session
{
  id: "user_id",
  name: "User Name",
  email: "user@email.com",
  loginTime: "ISO timestamp"
}
```

---

## 📱 Responsive Design

- **Mobile**: < 768px (stacked layout)
- **Tablet**: 768px - 991px
- **Desktop**: 992px+ (full layout)

Bootstrap grid system ensures responsive behavior across all devices.

---

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ ✅ |
| Firefox | 88+ ✅ |
| Safari | 14+ ✅ |
| Edge | 90+ ✅ |

---

## 📞 Contact

- **GitHub**: https://github.com/your-team/vitalmind-ai
- **Team Email**: team@vitalmind.ai

**Team Members**:
- Apurva Raj
- Gowri Chandran
- Harshitha Kasu
- Jiamin Jiang

---

## 📜 License

Educational project - MIT License

---

**⚠️ Disclaimer**: Educational project only. Not for medical use.
```

---

## 📁 FINAL FILE CHECKLIST
```
✅ index.html           (Apurva Raj)
✅ register.html        (Gowri Chandran)
✅ dashboard.html       (Harshitha Kasu)
✅ css/login.css        (Apurva Raj)
✅ css/register.css     (Gowri Chandran)
✅ css/dashboard.css    (Harshitha Kasu)
✅ js/auth.js           (Apurva Raj)
✅ js/validation.js     (Gowri Chandran)
✅ js/dashboard.js      (Jiamin Jiang)
✅ README.md            (Jiamin Jiang)