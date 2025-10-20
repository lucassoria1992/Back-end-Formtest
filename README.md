# Back-end Formtest

Backend API for form testing built with Express and MongoDB.

## Prerequisites

- Node.js (v12 or higher)
- MongoDB

## Installation

1. Clone the repository:
```bash
git clone https://github.com/lucassoria1992/Back-end-Formtest.git
cd Back-end-Formtest
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:
```
MONGODB_URI=mongodb://localhost/Test_base
PORT=4000
```

## Running the Application

### Development mode with auto-reload:
```bash
npm run dev
```

### Production mode:
```bash
node src/index.js
```

The server will start on the port specified in your `.env` file (default: 4000).

## API Endpoints

- `GET /api/ver` - Get all forms
- `POST /api/crear` - Create a new form
- `PUT /api/` - Update a form
- `DELETE /api/` - Delete a form

## Configuration

All configuration is managed through environment variables. See `.env.example` for the required variables.
