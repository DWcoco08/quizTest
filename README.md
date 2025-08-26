# QuizTest Project

A web application for creating and managing quizzes, built with ReactJS.

## Features

- User Authentication (Login/Register)
- Admin Dashboard
  - Manage Users
  - Create/Edit/Delete Quizzes
  - Add/Edit Questions and Answers
  - Assign Quizzes to Users
- User Interface
  - Take Quizzes
  - View Results
  - Track Progress
- Multi-language Support (English/Vietnamese)
- Responsive Design

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or higher)
- npm/yarn
- Docker (for running the backend services)

## Getting Started

### Backend Setup

1. Download the Docker files from [here](https://drive.google.com/drive/folders/1HLFYoiwQyBSkilhNh3ABak2EHNERKNUn?usp=drive_link)
2. Extract the downloaded files
3. Open terminal in the extracted folder
4. Run Docker commands:

```bash
docker-compose up -d
```

This will start all necessary backend services.

### Frontend Setup

1. Clone the repository

```bash
git clone https://github.com/DWcoco08/quizTest.git
```

2. Navigate to project directory

```bash
cd quizTest
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## Usage

### Admin Account

- Username: admin
- Password: 123456

### Test User Account

- Username: user01
- Password: 123456

## Technology Stack

- Frontend:

  - ReactJS
  - Redux for state management
  - SCSS for styling
  - React Router for navigation
  - i18next for internationalization
  - React Toastify for notifications

- Backend (Docker containers):
  - Node.js
  - Express
  - MySQL
  - Sequelize ORM

## Contributing

If you want to contribute to this project, please fork the repository and create a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

If you have any questions, feel free to reach out to me.
