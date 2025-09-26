# Workshop Management System (WMS)

A **responsive, modular web app** for managing mechanical workshops, built with **pure HTML/CSS/JavaScript** (vanilla, easily extendable with Tailwind/Bootstrap) and **Firebase** (Authentication, Firestore, Storage).

- **Demo:** _[host your app and add link here]_
- **Stack:** HTML, CSS, JS, Firebase (Auth, Firestore, Storage), Chart.js, jsPDF
- **Theme:** #072F5F (dark blue), INR currency

---

## ✨ Features

- **Authentication:** Secure login using Firebase Auth. Role-based UI (admin, manager, employee).
- **Dashboard:** Key metrics (work remaining, stock, receivables, today's revenue, monthly profit), revenue line chart (last 30 days), category pie chart for expenses.
- **Customers:** List, search, add/edit, view details (bills, warranties, visits), manage vehicles.
- **Billing:** Create invoices (customer, vehicle, stock/manual items, discounts, taxes, payments), print/save PDF, update stock, filter/edit/cancel history.
- **Stock:** Manage items, low-stock alerts, seller/payment info.
- **Salaries & Workers:** Manage workers, pay salary/bonus/deductions, salary history.
- **Warranty Packages:** Create/enroll/track packages, customer visits, expiry notifications.
- **Product Warranties:** Register and track expiry for product warranties.
- **Expenses:** Track expenses by date/category, daily totals, category breakdown.
- **Settings:** Manage workshop info, logo (upload to Storage), stock thresholds, roles.
- **Profile:** Edit user profile, change password.
- **Security:** All writes/updates via authenticated users; role checks in UI and Firestore rules.
- **Progressive Enhancements:** Client-side validation, search/filter, pagination, confirmation modals, optimistic UI.

---

## 🔧 Quick Start

1. **Clone this repo:**
    ```sh
    git clone https://github.com/nihan-vp/workshop-manager.git
    cd workshop-manager
    ```

2. **Create a Firebase Project:**
   - Go to [Firebase Console](https://console.firebase.google.com/).
   - Enable **Authentication (Email/Password)**.
   - Create **Firestore Database** and **Storage**.
   - Add your web app, copy the config.

3. **Configure Firebase:**
   - Paste your config in `firebase-init.js`:
     ```js
     const firebaseConfig = { /* your config here */ };
     ```

4. **Deploy:**
   - You can deploy as static site (Firebase Hosting, GitHub Pages, Netlify, Vercel, etc).
   - All HTML/JS/CSS files are self-contained.

---

## 📁 File Structure

```
/
├── index.html               # Login page
├── dashboard.html           # Metrics & charts
├── customers.html           # Customer management
├── customer_detail.html     # Tabs: bills, warranties, visits
├── billing.html             # Invoice generation
├── bill_history.html        # Bill filtering/history
├── stock.html               # Stock management
├── salaries.html            # Worker & salary management
├── warranties.html          # Warranty packages
├── product_warranties.html  # Product warranties
├── expenses.html            # Expenses tracking
├── settings.html            # Workshop & role settings
├── profile.html             # User profile
├── styles.css               # Theme & responsive styles
├── components.js            # Header/sidebar modules
├── firebase-init.js         # Firebase config/init
└── README.md                # This file
```

---

## 📝 Firestore Collections

- `users/{uid}`: `{ name, email, role, phone, createdAt }`
- `customers/{customerId}`: `{ name, phone, email, address, vehicles, ... }`
- `bills/{billId}`: `{ customerId, items, payment, status, ... }`
- `stock/{itemId}`: `{ code, name, quantity, ... }`
- `workers/{workerId}` + `/salaryHistory`
- `warrantyPackages/{packageId}` + `/customers`
- `productWarranties/{warrantyId}`
- `expenses/{expenseId}`
- `settings/{workshopId}`

---

## 🖼️ Screenshots

_Add screenshots/gifs of dashboard, billing, customer detail, etc here!_

---

## 🛡️ Security

- All Firestore reads/writes require authentication.
- Only admin/manager can update/cancel bills and manage roles (enforced by Firestore rules).
- UI shows/hides features based on role.

---

## 🙌 Credits

- Built by [nihan-vp](https://github.com/nihan-vp)
- Uses [Firebase](https://firebase.google.com/), [Chart.js](https://www.chartjs.org/), [jsPDF](https://github.com/parallax/jsPDF)

---

## 📜 License

MIT
