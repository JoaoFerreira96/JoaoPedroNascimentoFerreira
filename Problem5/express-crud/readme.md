# TypeORM CRUD API with Express and SQLite

This project is a simple CRUD (Create, Read, Update, Delete) API built with TypeScript, Express.js, and TypeORM using SQLite as the database. 
The API allows for managing resources through RESTful endpoints.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Database](#database)
- [Scripts](#scripts)
## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies:**

    Make sure you have Node.js installed. Then, run:

    ```bash
    npm install
    ```

3. **Set up the database:**

    The project uses SQLite as the database. You don't need to manually create the `database.sqlite` file; it will be generated automatically when you run the migrations.

    **Generate and run migrations:**

    ```bash
    npx typeorm migration:generate -d src/data-source.ts -n InitialMigration
    npx typeorm migration:run -d src/data-source.ts
    ```

4. **Start the development server:**

    ```bash
    npm run dev
    ```

    The server will start on `http://localhost:3000`.

## Usage

You can interact with the API using tools like [Postman](https://www.postman.com/) or `curl`. 
Below are the available endpoints.

## Endpoints

### Create a Resource

- **POST** `/api/resources`
- **Body Parameters**:
  - `name` (string): Name of the resource.
  - `description` (string): Description of the resource.
- **Response**: Returns the created resource.

### List Resources

- **GET** `/api/resources`
- **Query Parameters**:
  - `name` (optional, string): Filter resources by name.
- **Response**: Returns a list of resources.

### Get a Resource by ID

- **GET** `/api/resources/:id`
- **URL Parameters**:
  - `id` (number): ID of the resource to retrieve.
- **Response**: Returns the requested resource.

### Update a Resource

- **PUT** `/api/resources/:id`
- **URL Parameters**:
  - `id` (number): ID of the resource to update.
- **Body Parameters**:
  - `name` (string): New name of the resource.
  - `description` (string): New description of the resource.
- **Response**: Returns the updated resource.

### Delete a Resource

- **DELETE** `/api/resources/:id`
- **URL Parameters**:
  - `id` (number): ID of the resource to delete.
- **Response**: No content.

## Database

This project uses SQLite as the database.

## Scripts

- **`npm run dev`**: Starts the development server with hot-reloading.
- **`npx typeorm migration:generate -d src/data-source.ts -n MigrationName`**: Generates a new migration based on your entities.
- **`npx typeorm migration:run -d src/data-source.ts`**: Runs pending migrations to update the database schema.
