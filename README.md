# 🛠️ React Vite Project with Tailwind, MUI, React Router, and Shared Components

Welcome to the **React Vite** project! This app is built using modern technologies like **Tailwind CSS**, **Material-UI (MUI)**, **React Router**, and **React Table**. Below, you'll find a detailed explanation of the project's structure, features, and setup instructions.

## 📁 Project Structure

The project is organized with **shared components** to ensure a clean and reusable codebase. Here's a breakdown of the main components and features:

```
/src
│
├── /components
│   ├── Navbar.js          // 📎 Navbar component
│   ├── Sidebar.js         // 🗂️ Sidebar component
│   ├── SearchBar.js       // 🔍 SearchBar component
│   ├── Table.js           // 🧮 Shared Table using React Table
│   ├── Input.js           // 🔢 Input component
│
├── /pages
│   ├── Home.js            // 🏠 Home page
│   ├── Dashboard.js       // 📊 Dashboard page
│   ├── About.js           // ℹ️ About page
│
├── /hooks
│   ├── useSearchParams.js  // 🧭 Custom hook for handling search params
│
└── App.js                 // 🌐 Main app component (includes routing)
```

## ✨ Features

- **Tailwind CSS** for modern and responsive UI design.
- **Material-UI (MUI)** for prebuilt components and beautiful styling.
- **React Router** for seamless navigation between pages.
- **Shared components** like `Table`, `SearchBar`, `Input`, `Navbar`, and `Sidebar` to promote code reusability.
- **React Table** for flexible, performant, and extensible table functionality.
- **URL Query Parameters** for search and pagination with search params like `page=2` or `search=name`.

## 🚀 Quick Start

### 1. Installation

First, clone the repository and install the required dependencies:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
```

### 2. Start the Development Server

Run the following command to start the development server:

```bash
npm run dev
```

The app will be live at `http://localhost:3000`.

### 3. Build for Production

To build the app for production, use:

```bash
npm run build
```

### 4. Preview Production Build

After building, you can preview the production build with:

```bash
npm run serve
```

## 🔨 Usage

### 💻 Shared Components

- **Table**: A shared table built using **React Table**. It supports pagination, sorting, and filtering.
- **Navbar & Sidebar**: Shared navigation components styled with Tailwind and MUI icons.
- **SearchBar**: Integrated with the URL query parameters, allowing users to search for data with `search=name` in the URL.
- **Inputs**: Custom input components styled with Tailwind and MUI.

### 🌐 URL Search Parameters

For pagination and search, we use **React Router**’s `useSearchParams` to manage query parameters in the URL. This allows for stateful data, such as `?page=2` or `?search=name`.

Example usage in a component:

```jsx
const [searchParams, setSearchParams] = useSearchParams();
const page = searchParams.get("page") || 1;
const searchQuery = searchParams.get("search") || "";

useEffect(() => {
  // Fetch data based on search query and page
}, [page, searchQuery]);
```

## 🛠️ Tech Stack

- **Vite**: Lightning-fast bundler for modern web apps.
- **React**: A powerful library for building dynamic user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Material-UI (MUI)**: React components for faster and easier web development.
- **React Router**: Declarative routing for React applications.
- **React Table**: Headless UI for building flexible tables.

## 📦 Dependencies

Here are the major dependencies used in this project:

```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-router-dom": "^6.0.0",
    "react-table": "^7.0.0",
    "tailwindcss": "^3.0.0",
    "@mui/material": "^5.0.0",
    "@mui/icons-material": "^5.0.0"
  }
}
```

## 📝 License

This project is licensed under the **MIT License**.

---

Feel free to explore the code, create new components, and adapt this project to suit your needs. Happy coding! 🎉

---

Let me know if you'd like to add or modify anything!
