# 📚 Computer Engineering Department Portal

A simple, clean, and efficient **ReactJS web application** designed to help Computer Engineering students and faculty manage academic information, grades, and more.  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## ✨ Features

- 📊 View subject grades with computed final averages.
- 🚦 Highlight passing, failing, and convertible grades.
- 🛠️ Organized structure for easy expansion (add authentication, portals, announcements, etc.).
- 🎨 Modern and responsive table design using Tailwind CSS.

---

## 🛠 Tech Stack

- **Frontend:** ReactJS, JavaScript, Tailwind CSS
- **Tooling:** Create React App (CRA)
- **Deployment Ready:** Production build supported

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed (v16+ recommended)
- npm (comes with Node)

### Installation

```bash
git clone https://github.com/your-username/cpe-portal.git
cd cpe-portal
npm install
```

### Running the app locally

```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.  
The app will automatically reload when you save changes.

---

## 📂 Project Structure

```
cpe-portal/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── layouts/
│   │   └── layout.jsx
│   ├── pages/
│   │   ├── Announcement.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Grades.jsx
│   │   ├── Login.jsx
│   │   └── Schedule.jsx
│   ├── components/
│   │   ├── CodePlayGround/
│   │   ├── header.jsx
│   │   ├── PostingTab.jsx
│   │   ├── Sidebar.jsx
│   │   └── GradesTable.jsx
│   ├── App.jsx
│   ├── index.js
│   ├── firebase.js
│   └── styles/
│       └── tailwind.css
├── package.json
└── README.md
```

---

## 📋 Usage

- **Grades Table**  
  Displays a table of all enrolled subjects with:
  - Prelim, Midterm, and Endterm grades.
  - Automatically calculated **Final Average**.
  - Displays **Grade Status**:
    - ✅ Passing
    - ❌ Failing
    - 🔄 Convertible (with conditions)

- **Future Features (Coming Soon)**
  - 🔒 Login/Signup authentication
  - 📝 Announcements page (On Development)
  - 📁 Student Profile Management
  - 📜 Certificate Generator

---

<!-- ## 📸 Screenshot

> (You can add a screenshot here!)  
> Example:
> ![App Screenshot](./screenshot.png)

--- -->

## 🧠 Contributing

Pull requests are welcome!  
For major changes, please open an issue first to discuss what you would like to change.  
Let's make this portal better together!

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Acknowledgements

- Special thanks to the Computer Engineering Department of TUP-Visayas.
- Built with ❤️ using React.

---

> _“Empowering Computer Engineers, one portal at a time.”_ 🖥️🚀