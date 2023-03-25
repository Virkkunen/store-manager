
# Store Manager

A store backend service with CRUD endpoints and database integration that runs locally on a Docker container.
It can retrieve all products and sales from the database, create, update and delete products and sales.


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

The service is now running on `localhost:3001`

## API Reference

### Products

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

#### Search for a product by name

```http
  GET /products/search?q=${search}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `search`      | `string` | **Required**. Query with a name to search |

#### Create a new product

```http
  POST /products/
```
Requisition body:
```js
{ "name": ${productName} }
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `productName`      | `string` | **Required**. Name of the new product |

#### Update a product

```http
  PUT /products/${id}
```

Requisition body:
```js
{ "name": ${productName} }
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of item to update |
| `productName`      | `string` | **Required**. New name for the product |

#### Delete a product

```http
  DELETE /products/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of the product to delete |


### Sales

#### Get all sales

```http
  GET /sales
```

#### Get a specific sale

```http
  GET /sales/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of sale to fetch |

#### Create a new sale

```http
  POST /sales/
```
Requisition body:
```js
[
  {
    "productId": ${productId},
    "quantity": ${quantity}
  },
  {
    "productId": 3,
    "quantity": 4
  }
]
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `productId`      | `number` | **Required**. ID of the product |
| `quantity`      | `number` | **Required**. How many products to sell |

Able to sell multiple products in one requisition.

#### Update a new sale

```http
  PUT /sales/${id}
```
Requisition body:
```js
[
  {
    "productId": ${productId},
    "quantity": ${quantity}
  },
  {
    "productId": 3,
    "quantity": 4
  }
]
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. ID of the sale |
| `productId`      | `number` | **Required**. ID of the product |
| `quantity`      | `number` | **Required**. How many products to sell |

Able to update multiple product sales in one requisition.

#### Delete a sale

```http
  DELETE /sales/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of the sale to delete |

## Running Tests

To run tests, run the following command

```bash
  npm run test:mocha
```

## Authors

- [@Virkkunen](https://www.github.com/Virkkunen)


## Tech Stack

Node.js, Express.js, MySQL, Docker, REST API, CRUD, MSC, Mocha, Chai, Sinnon

## License

[MIT](https://choosealicense.com/licenses/mit/)

