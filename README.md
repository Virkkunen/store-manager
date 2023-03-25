
# Store Backend

A store backend service with CRUD endpoints and database integration that runs locally on a Docker container.
It can retrieve all products and sales listed, create, update and delete products and sales.


## Features

- GET, POST, PUT and DELETE endpoints
- Database integration
- MSC architecture
- Unit tests


## Run Locally

Clone the project

```bash
  git clone https://github.com/Virkkunen/store-manager.git
```

Go to the project directory

```bash
  cd store-manager
```

Install dependencies

```bash
  npm i
```

Start the server

```bash
  docker-compose up -d
```

Seed the database

```bash
  npm run migration
  npm run seed
```

Optionally, to access the server terminal

```bash
  docker exec -it store_manager bash
```

The service is now running on port 3001. 

## API Reference

#### Get all products

```http
  GET /products
```

#### Get a specific product

```http
  GET /products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of item to fetch |

## Running Tests

To run tests, run the following command

```bash
  npm run test:mocha
```

## Authors

- [@Virkkunen](https://www.github.com/Virkkunen)


## Tech Stack

Node.js, Express.js, MySQL, Docker, CRUD, MSC, Mocha, Chai, Sinnon
