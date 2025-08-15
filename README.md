# Task Management System API 🚀

A robust REST API for managing tasks built with Node.js, Express, TypeScript, and MongoDB. This API supports full CRUD operations with additional features like pagination, filtering, and search.

![API Demo](https://img.shields.io/badge/status-active-success.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-4.5.5-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-16.x-green.svg)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-5.x-green.svg)

## Features ✨

- Full CRUD Operations: Create, Read, Update, Delete tasks
- Pagination: Efficiently browse through tasks
- Filtering: Filter tasks by status (PENDING, COMPLETED, IN_PROGRESS)
- Search: Find tasks by title
- Validation: Robust input validation with Zod
- API Documentation: Interactive Swagger UI
- Type Safety: Built with TypeScript
- Rate Limiting: Protection against brute force attacks
- Security: Helmet for secure headers

## Tech Stack 🛠️

- Backend: Node.js, Express
- Database: MongoDB
- Language: TypeScript
- Validation: Zod
- Documentation: Swagger UI
- Linting: ESLint + Prettier

## Prerequisites 📋

- Node.js (v16 or higher)
- npm (v8 or higher)
- MongoDB (v5 or higher)
- TypeScript (v4 or higher)

## Setup Instructions 🛠️

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/task-management-system.git
cd task-management-system
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a .env file in the root directory with the following variables:

```env
MONGO_URI=mongodb://localhost:27017/task_manager
PORT=5000
NODE_ENV=development
```

### 4. Start the Development Server

```bash
npm run dev
```

The API will be available at https://synegrow-assignment.onrender.com

### 5. Access Swagger Documentation

Visit https://synegrow-assignment.onrender.com/api-docs for interactive API documentation.

## API Endpoints 📡

All endpoints are prefixed with /tasks

| Method | Endpoint | Description                |
|-------:|:--------:|----------------------------|
| POST   | /        | Create a new task          |
| GET    | /        | Get all tasks (with pagination) |
| GET    | /:id     | Get a single task by ID    |
| PUT    | /:id     | Update a task by ID        |
| DELETE | /:id     | Delete a task by ID        |

## API Documentation 📚

### Create a Task
Endpoint: POST /tasks

Request Body:
```json
{
  "title": "Complete assignment",
  "description": "Finish the SDE intern assignment",
  "status": "PENDING"
}
```

Response:
```json
{
  "id": "507f1f77bcf86cd799439011",
  "title": "Complete assignment",
  "description": "Finish the SDE intern assignment",
  "status": "PENDING",
  "createdAt": "2023-05-20T12:00:00.000Z",
  "updatedAt": "2023-05-20T12:00:00.000Z"
}
```

### Get All Tasks
Endpoint: GET /tasks

Query Parameters:
- page (optional): Page number (default: 1)
- limit (optional): Items per page (default: 10)
- status (optional): Filter by status (PENDING, COMPLETED, IN_PROGRESS)
- search (optional): Search by title (case-insensitive)

Example Request:
```bash
GET /tasks?page=1&limit=5&status=COMPLETED&search=assignment
```

Response:
```json
{
  "tasks": [
    {
      "id": "507f1f77bcf86cd799439011",
      "title": "Complete assignment",
      "description": "Finish the SDE intern assignment",
      "status": "COMPLETED",
      "createdAt": "2023-05-20T12:00:00.000Z",
      "updatedAt": "2023-05-20T12:00:00.000Z"
    }
  ],
  "total": 1,
  "page": 1,
  "totalPages": 1
}
```

### Get Single Task
Endpoint: GET /tasks/:id

Example Request:
```bash
GET /tasks/507f1f77bcf86cd799439011
```

Response:
```json
{
  "id": "507f1f77bcf86cd799439011",
  "title": "Complete assignment",
  "description": "Finish the SDE intern assignment",
  "status": "COMPLETED",
  "createdAt": "2023-05-20T12:00:00.000Z",
  "updatedAt": "2023-05-20T12:00:00.000Z"
}
```

### Update Task
Endpoint: PUT /tasks/:id

Request Body:
```json
{
  "title": "Updated task title",
  "status": "IN_PROGRESS"
}
```

Response:
```json
{
  "id": "507f1f77bcf86cd799439011",
  "title": "Updated task title",
  "description": "Finish the SDE intern assignment",
  "status": "IN_PROGRESS",
  "createdAt": "2023-05-20T12:00:00.000Z",
  "updatedAt": "2023-05-20T12:30:00.000Z"
}
```

### Delete Task
Endpoint: DELETE /tasks/:id

Response:
```json
{
  "message": "Task deleted successfully"
}
```

## Deployment 🚀

### 1. Build the Project
```bash
npm run build
```

### 2. Start the Production Server
```bash
npm start
```

## Running Tests (Optional)
```bash
# Coming soon!
# npm test
```

## Project Structure 📂
```text
task-management-system/
├── src/
│   ├── config/       # Configuration files
│   ├── controllers/  # Route controllers
│   ├── interfaces/   # TypeScript interfaces
│   ├── middlewares/  # Express middlewares
│   ├── models/       # MongoDB models
│   ├── routes/       # API routes
│   ├── services/     # Business logic
│   ├── utils/        # Utility functions
│   ├── app.ts        # Express application
│   └── server.ts     # Server entry point
├── .env              # Environment variables
├── .eslintrc.json    # ESLint configuration
├── .prettierrc       # Prettier configuration
├── package.json      # Project dependencies
├── tsconfig.json     # TypeScript configuration
└── README.md         # Project documentation
```

## Contributing 🤝

Contributions are welcome! Please follow these steps:
- Fork the repository
- Create your feature branch (`git checkout -b feature/AmazingFeature`)
- Commit your changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact 📧

For any inquiries, please reach out to your-email@example.com

---

This README includes:
1. Project description with badges and features
2. Detailed setup instructions with environment configuration
3. Comprehensive API documentation with example requests/responses for all endpoints
4. Project structure explanation
5. Deployment instructions
6. Contributing guidelines
7. License information

You can customize the contact information, repository URL, and any other details specific to your project before publishing to GitHub.
