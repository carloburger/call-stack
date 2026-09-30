# Call Stack

This project is a small MERN app for managing employee records. It includes:

- A React frontend in `mern/client`
- An Express API in `mern/server`
- A MongoDB database connection for storing employee records

## Project structure

```bash
call-stack/
├── .env.example
├── .gitignore
├── mern/
│   ├── client/
│   └── server/
└── README.md
```

## Prerequisites

Before you start, make sure you have:

- Git
- Node.js 18+ recommended
- npm
- A MongoDB Atlas connection string or a local MongoDB instance

## 1) Clone the repository

```bash
git clone <repo-url>
cd call-stack
```

## 2) Install dependencies

Install the frontend dependencies:

```bash
cd mern/client
npm install
```

Install the backend dependencies:

```bash
cd ../server
npm install
```

## 3) Configure environment variables

This project expects the server to have access to these environment variables:

- `ATLAS_URI` - your MongoDB connection string
- `PORT` - the port for the Express API (default is `5050`)

A sample file is included at the project root:

```bash
cp .env.example .env
```

Then update `.env` with your real values:

```env
ATLAS_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
PORT=5050
```

> The project reads values from `process.env`, so they must be available in the terminal session where the server starts. If you prefer, you can also export them directly in your shell instead of using a `.env` file.

## 4) Start the backend

From the server folder:

```bash
cd mern/server
node server.js
```

The API will run on:

```bash
http://localhost:5050
```

## 5) Start the frontend

Open a new terminal and run:

```bash
cd mern/client
npm run dev
```

The frontend will usually open on:

```bash
http://localhost:5173
```

The Vite config proxies `/record` requests to the backend at `localhost:5050`, so the UI can talk to the API during development.

## 6) Verify the app is working

- Open the client in the browser at `http://localhost:5173`
- Confirm the API responds at `http://localhost:5050/record`
- Make sure your MongoDB database is reachable and the connection string is valid

## Common troubleshooting

### MongoDB connection errors

- Double-check `ATLAS_URI`
- Make sure your IP address is allowed in MongoDB Atlas if you are using Atlas
- Confirm the database name in the URI is correct

### Frontend cannot load records

- Ensure the backend is running
- Confirm the Vite dev server is running on port `5173`
- Check the browser console and terminal output for API errors

### Port issues

- If `PORT` is changed, update any local references accordingly
- The default backend port is `5050`

## Useful notes

- The API routes are mounted under `/record`
- The app stores employee records in the MongoDB database named `employees`
- The frontend is built with React + Vite, and the backend is built with Express

## Team workflow

1. Pull the latest changes
2. Run `npm install` in both app folders
3. Recreate or update your local `.env`
4. Start the server
5. Start the client
6. Verify functionality before committing changes
