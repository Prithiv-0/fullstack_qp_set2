# Full Stack Frameworks - Exam Solutions

This repository contains solutions for all questions from the Full Stack Frameworks Mid-Term Examination (August 2025).

## 🚀 Live Demo

- **Question 1 - Employee Tax Calculator (Vercel)**: [View Live](https://employee-tax-calculator.vercel.app)
- **Questions 2-6 - Theory Answers (GitHub Pages)**: [View Live](https://prithiv-0.github.io/fullstack_qp_set2/theory-answers.html)

## 📋 Project Overview

### Question 1: Employee Tax Calculator (React Application)

A fully functional React-based Employee Tax Calculator with the following features:

#### Features:
- **Real-time Salary Calculation**: Automatically calculates salary components as you type
  - DA (Dearness Allowance): 30% of Basic Pay
  - HRA (House Rent Allowance): 10% of Basic Pay
  - Special Allowance: 5% of Basic Pay
  - Total Salary: Sum of all components

- **Grade Assignment**: Determines employee grade based on total salary
  - Grade A: ₹10,000 - ₹20,000
  - Grade B: ₹20,001 - ₹30,000
  - Grade C: ₹30,001 - ₹40,000
  - Grade EXC: > ₹40,000

- **Bonus Calculation**: Calculates bonus based on employee grade
  - Grade A: 15% of Basic Pay
  - Grade B: 12% of Basic Pay
  - Grade C: 6% of Basic Pay
  - Grade EXC: 5% of Basic Pay

- **Modern UI**: Beautiful gradient design with smooth animations and responsive layout

### Questions 2-6: Theory Answers (HTML Page)

Comprehensive answers with code examples for:

#### Question 2: MongoDB Operations
- Database creation
- Document insertion (CRUD operations)
- Document searching
- Document updating
- Document deletion

#### Question 3: Class vs Function Components
- Detailed comparison table
- Working examples of both component types
- Explanation of React Hooks

#### Question 4: Complete Missing Code
- FormattedSalary component solution
- Detailed explanations

#### Question 5: Lists in React
- Student marks display examples
- map() function usage
- Key concepts

#### Question 6: React Routing
- Installation guide
- Basic routing examples
- Advanced routing with URL parameters
- Navigation hooks

## 🛠️ Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **HTML5/CSS3** - Styling and markup
- **GitHub Actions** - CI/CD for automated deployment
- **GitHub Pages** - Hosting for theory answers
- **Vercel** - Hosting for the React calculator

## 📦 Project Structure

```
fullstack_qp_set2/
├── employee-tax-calculator/     # React application (Question 1)
│   ├── src/
│   │   ├── App.jsx             # Main calculator component
│   │   ├── App.css             # Component styles
│   │   ├── index.css           # Global styles
│   │   └── main.jsx            # Entry point
│   ├── package.json            # Dependencies
│   └── vite.config.js          # Vite configuration
├── theory-answers.html          # Theory answers page (Questions 2-6)
├── index.html                   # Landing page for GitHub Pages
├── assets/                      # Built assets
├── .github/workflows/           # GitHub Actions workflows
└── README.md                    # This file
```

## 🚀 Local Development

### Prerequisites
- Node.js 20 or higher
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Prithiv-0/fullstack_qp_set2.git
   cd fullstack_qp_set2
   ```

2. **Install dependencies**
   ```bash
   cd employee-tax-calculator
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```
   Built files will be in the `dist/` directory

5. **View theory answers**
   Open `theory-answers.html` in your browser

## 🌐 Deployment

- **Employee Tax Calculator**: Deploy the `employee-tax-calculator` folder to Vercel.
- **Theory Answers**: GitHub Pages publishes the static HTML files in the repository root.

If the Vercel URL changes, update the links in `index.html`, `theory-answers.html`, and this README.

## 📸 Screenshots

### Employee Tax Calculator
![Calculator Screenshot](https://github.com/user-attachments/assets/52e9047c-0d4d-4cec-a478-e1dcd56bdb59)

### Theory Answers Page
![Theory Answers Screenshot](https://github.com/user-attachments/assets/74446bb5-770d-4200-9be7-c3cdd2709e2b)

## ✅ Features Checklist

- [x] Question 1 - Employee Tax Calculator
  - [x] Real-time salary calculation
  - [x] Grade assignment functionality
  - [x] Bonus calculation
  - [x] Professional UI design
  - [x] Responsive layout
  
- [x] Questions 2-6 - Theory Answers
  - [x] MongoDB operations with examples
  - [x] Component types comparison
  - [x] Code completion examples
  - [x] List rendering examples
  - [x] Routing examples and explanations

- [x] Deployment
  - [x] GitHub Pages configuration
  - [x] GitHub Actions workflow
  - [x] Navigation between pages

## 📝 License

This project is created for educational purposes as part of the Full Stack Frameworks course examination.

## 👨‍💻 Author

Prithiv-0

## 🙏 Acknowledgments

- Amrita Vishwa Vidyapeetham, Coimbatore Campus
- Full Stack Frameworks Course (23CSE461)
