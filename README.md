<div align="center">

# 🧩 Backend Development — Node.js & Express

**A hands-on learning repo for backend development: Node.js core modules, raw HTTP servers and Express — one small, working example per concept.**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white)

</div>

---

## What's in here

The repository collects backend fundamentals, one topic at a time:

- **Node.js core modules** — `fs` (sync and async file operations, reading, writing, appending, deleting, creating directories), `os` (system information: architecture, memory, uptime, hostname), `path`, and more
- **HTTP servers from scratch** — building a raw server with the built-in `http` module and handling routing manually
- **Express** — routing (`GET`, `POST`, and beyond), middleware chains, request/response handling
- **Assignments and exercises** — practice problems that reinforce each concept

## Planned / upcoming

As the learning continues, this repo is intended to cover:

- REST API design and CRUD operations
- Middleware in depth (custom, error-handling, third-party)
- Template engines (EJS) and serving static files
- Databases — MongoDB with Mongoose
- Authentication and authorization (sessions, cookies, JWT, bcrypt)
- File uploads, validation, and error handling
- Environment configuration and project structure
- Deployment

## Tech stack

- [Node.js](https://nodejs.org/) — JavaScript runtime
- [Express](https://expressjs.com/) — web framework for Node.js
- npm — package management

## Getting started

**Prerequisites:** [Node.js](https://nodejs.org/) (v18 or newer) and npm installed.

```bash
# Clone the repository
git clone https://github.com/Awaneesh03/Backend.git
cd Backend

# Install dependencies
npm install
```

## Running the code

The current entry point is `import.js`, which runs a small Express server:

```bash
node import.js
```

The server starts on **http://localhost:3000**.

| Method | Route | Response     |
| ------ | ----- | ------------ |
| `GET`  | `/`   | `hello`      |
| `POST` | `/`   | `hello post` |

Two logging middleware functions run before each request reaches its route handler, demonstrating how the Express middleware chain passes control along with `next()`.

## Structure

```
Backend/
├── import.js          # Main practice file — Node core modules, http server, Express
├── package.json       # Project metadata and dependencies
├── .gitignore
└── README.md
```

`import.js` keeps earlier exercises commented out above the active code, so the progression through `fs` → `os` → `http` → `express` stays visible in one place.

## Notes

This is a practice repository, not a production application. Code here favours clarity and experimentation over polish — the goal is understanding how backend systems work from the ground up.

---

## 👤 Author

**Awaneesh Gupta** — B.Tech CSE (AI) @ Vedam School of Technology

[![GitHub](https://img.shields.io/badge/GitHub-Awaneesh03-181717?style=flat-square&logo=github)](https://github.com/Awaneesh03)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-awaneesh--gupta-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/awaneesh-gupta)

<p align="center"><sub>If you found this project useful, consider giving it a ⭐</sub></p>
