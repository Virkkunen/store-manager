
# Store Backend

A store backend service with CRUD endpoints and database integration that runs locally on a Docker container.


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

Optionally, to access the server terminal

```bash
  docker exec -it store_manager bash
```

## Authors

- [@Virkkunen](https://www.github.com/Virkkunen)


## Tech Stack

Node.js, Express.js, MySQL, Docker, CRUD, MSC, Mocha, Chai, Sinnon
