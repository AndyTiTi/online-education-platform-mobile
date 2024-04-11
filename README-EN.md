# Online Education Platform

## Introduction

This project is an online education platform developed using React 18, TypeScript, NestJS, and GraphQL. It aims to provide a user-friendly interface for online learning, course management, and interaction between teachers and students.

## Technology Stack

- **Frontend**: React 18 with TypeScript offers powerful componentization and type checking capabilities.
- **Backend**: NestJS serves as the server-side Node.js framework, providing scalability and modular structure.
- **Data Layer**: GraphQL is used for efficient data querying and manipulation, ensuring precision and flexibility in data transfer.

## Installation

Before getting started, ensure you have the following dependencies installed:

- Node.js (latest version is recommended)
- Yarn or npm
- Docker (for running the database)

### Clone the Repository

```bash
git clone https://github.com/your-username/online-education-platform.git
cd online-education-platform
```

### Install Dependencies

```bash
yarn install # or npm install
```

## Running the Platform

### Development Environment

```bash
yarn start:dev # or npm run start:dev
```

This will start both the frontend and backend development servers. By default, the frontend will run at `http://localhost:3000`, and the backend will be accessible at `http://localhost:3000/api`.

### Production Environment

```bash
yarn build # or npm run build
yarn serve # or npm run serve
```

This will build the application and start the production server.

## Database

The database is managed using Docker. To start the database, run:

```bash
docker-compose up -d
```

## Directory Structure

```
online-education-platform/
├── backend/              # NestJS backend source code
│   ├── src/                # Source code directory
│   │   ├── main.ts        # Application entry point
│   │   ├── config/          # Configuration files
│   │   ├── modules/         # Module directory
│   ├── Dockerfile          # Docker configuration file
│   └── package.json
├── frontend/              # React frontend source code
│   ├── public/             # Public resources
│   │   └── index.html
│   ├── src/                # Source code directory
│   │   ├── components/      # Component directory
│   │   ├── pages/           # Pages directory
│   │   ├── App.tsx          # Main application component
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   └── package.json
├── .env                    # Environment variable configuration file
├── .gitignore               # Git ignore file
├── docker-compose.yml       # Docker configuration file
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation file
```

## Contribution

If you are interested in contributing to this project, please fork the repository first, then make changes in your local branch. After completing your modifications, submit a Pull Request for review and merging.

## License

This project is licensed under the [MIT License](LICENSE).
