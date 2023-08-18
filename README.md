# HealthServiceAPI

## About

HealthServiceAPI consists in a REST API based on [Oli Saúde backend test](https://github.com/olisaude/teste-dev-backend). The main functionalities are creating, retrieving, updating and deleting clients of a health service.

This project was developed as a study of APIs and backend, also aiming to establish a clean architecture.

## Technologies

### API Server

- NestJS
- Typescript

### Database

- MongoDB
- Prisma (ORM)

### Tests

- Jest

### Documentation

- Swagger

## Setup

- Clone the project repository

```bash
$ git clone https://github.com/daviembrito/health-service-api.git
$ cd health-service-api
```

- Download the project dependencies

```bash
$ npm install
```

- Set up a environment variable (or .env file) with name DATABASE_URL containing the MongoDB database URL
- Start the server

```bash
$ npm run start
```

## Test

You can run the tests with the following command

```bash
$ npm run test
```

## Endpoints

All the endpoints and requests examples made with Swagger are available at **localhost:3000/api**

- **GET /client**: returns all registered clients

Example:

![get /client example](https://cdn.discordapp.com/attachments/400108474748370946/1141891605876461630/image.png)

- **GET /client/{id}**: returns all atributes of the client with the provided id

Example:

![get /client/id example](https://cdn.discordapp.com/attachments/400108474748370946/1141891374686408824/image.png)

- **GET /client/top-health-risk**: returns the top 10 clients with highest health risk score and ordered

Example:

![get /client/top-health-risk example](https://cdn.discordapp.com/attachments/400108474748370946/1141892507362410506/image.png)

- **POST /client**: creates a new client record on the database based on the properties specified in the body

Example:

![post /client example](https://cdn.discordapp.com/attachments/400108474748370946/1141893666017910884/image.png)

- **PATCH /client/{id}**: updates the client properties based on what the body contains. Only the properties specified are updated.

Example:

![patch /client/id example](https://cdn.discordapp.com/attachments/400108474748370946/1141894687498711110/image.png)

- **DELETE /client/{id}**: deletes the client record on the database

Example:

![delete /client/id example](https://cdn.discordapp.com/attachments/400108474748370946/1141895780161032212/image.png)
