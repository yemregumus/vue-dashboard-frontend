# Vue Dashboard Frontend

This is a **Vue.js frontend application** for a **network metrics dashboard**. The application allows users to **register, log in, and view various network metrics** such as:

- Active customers
- Countries served
- Nodes online
- Transactions
- Blocks added

## Table of Contents

- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Routing](#routing)
- [API Endpoints](#api-endpoints)

---

## Usage

Once the development server is running, you can access the application in your browser at:

```
http://localhost:3000
```

### Register

To register a new user, navigate to the `/register` route and fill out the registration form.

### Login

To log in, navigate to the `/login` route and enter your credentials. Upon successful login, you will be redirected to the home page.

### Dashboard

The dashboard displays various network metrics. You can access it by navigating to the `/dashboard` route. **Note:** You must be logged in to view the dashboard.

---

## Project Structure

```
vue-dashboard-frontend/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Dashboard.vue
│   │   ├── LandingPage.vue
│   │   ├── Login.vue
│   │   ├── Register.vue
│   │   └── ...
│   ├── router/
│   │   └── index.js
│   ├── views/
│   │   ├── ActiveCustomers.vue
│   │   ├── BlocksAdded.vue
│   │   ├── CountriesServed.vue
│   │   ├── NodesOnline.vue
│   │   ├── Transactions.vue
│   │   └── ...
│   ├── App.vue
│   ├── main.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

---

## Components

### `Login.vue`

- Handles user login.
- Includes a form for entering email and password.
- Sends a **POST request** to the backend API to authenticate the user.

### `Register.vue`

- Handles user registration.
- Includes a form for entering **username, email, password, and password confirmation**.
- Sends a **POST request** to the backend API to create a new user.

### `Dashboard.vue`

- Displays various network metrics.
- Fetches data from the backend API and displays it in a table format.

---

## Routing

The application uses **Vue Router** for client-side routing. The routes are defined in `src/router/index.js`.

### Main Routes:

| Route              | Description           | Authentication Required |
| ------------------ | --------------------- | ----------------------- |
| `/`                | Landing page          | No                      |
| `/login`           | Login page            | No                      |
| `/register`        | Registration page     | No                      |
| `/home`            | Home page             | Yes                     |
| `/dashboard`       | Dashboard page        | Yes                     |
| `/activeCustomers` | Active Customers page | Yes                     |
| `/blocksAdded`     | Blocks Added page     | Yes                     |
| `/countriesServed` | Countries Served page | Yes                     |
| `/nodesOnline`     | Nodes Online page     | Yes                     |
| `/transactions`    | Transactions page     | Yes                     |

---

## API Endpoints

The application interacts with the backend API to perform various actions.

| Method   | Endpoint             | Description                |
| -------- | -------------------- | -------------------------- |
| **POST** | `/api/auth/register` | Register a new user        |
| **POST** | `/api/auth/login`    | Authenticate a user        |
| **GET**  | `/api/data`          | Fetch network metrics data |

---

### 🚀 Happy Coding! 🎉
