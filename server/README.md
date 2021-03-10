# Server

POSTMAN Documentation
[https://documenter.getpostman.com/view/13590478/Tz5nce9k](https://documenter.getpostman.com/view/13590478/Tz5nce9k)

List of available endpoints:

- `POST /users/register`
- `POST /users/login`
- `GET /products/`
- `POST /products/`
- `PUT /products/:id`

### POST /users/register

Description: Register new user

Request:

- data:

```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "id": 1,
  "username": "user1",
  "email": "user1@mail.com"
}
```

### POST /users/login

Description: Login user

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 200
- body:
  ​

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyMUBtYWlsLmNvbSIsImlhdCI6MTYxNTM1MjgwNn0.waCXrF_uqBD3F1zT13YXOPXWgbkNzeWkkFpjcXMDhOY"
}
```

### GET /products

Description: Get all products

Request:

- headers:

```json
{
  "access_token": "string"
}
```

Response:

- status: 200
- body:
  ​

```json
[
    {
        "id": 1,
        "title": "Iphone",
        "img_url": "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone_11-rosette-family-lineup-091019_big.jpg.large.jpg",
        "quantity": 100,
        "UserId": 1,
        "createdAt": "2021-03-10T05:16:21.000Z",
        "updatedAt": "2021-03-10T05:16:21.000Z"
    }
    ...
]
```

### POST /products

Description: Create new product

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- data:

```json
{
  "title": "string",
  "img_url": "string",
  "quantity": "integer"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "id": 1,
  "title": "Iphone",
  "img_url": "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone_11-rosette-family-lineup-091019_big.jpg.large.jpg",
  "quantity": "100",
  "UserId": 1,
  "updatedAt": "2021-03-10T05:16:21.912Z",
  "createdAt": "2021-03-10T05:16:21.912Z"
}
```

### PUT /products/:id

Description: Update product

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

- data:

```json
{
  "title": "string",
  "img_url": "string",
  "quantity": "integer"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "id": 1,
  "title": "Iphone",
  "img_url": "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone_11-rosette-family-lineup-091019_big.jpg.large.jpg",
  "quantity": "100",
  "UserId": 1,
  "updatedAt": "2021-03-10T05:16:21.912Z",
  "createdAt": "2021-03-10T05:16:21.912Z"
}
```
