# Contact Manager API

Welcome to the Contact Management App API repository! This project provides a set of backend APIs built with Express.js, allowing users to manage their contacts. The app ensures secure registration, login, and CRUD operations on contacts, all while maintaining user privacy and data integrity.

## Introduction

Contact Management App API is a backend project developed using Express.js. It offers a range of APIs for user registration, login, and contact management. The APIs are tested using Postman (or any HTTP request tools). Only authenticated users are allowed to manage their contacts, ensuring data security and privacy.

## Goals

- **User Registration**: Users can register for their account securely.
- **User Authentication**: Registered users can log in to their account and manage their contacts.
- **Contact Operations**: Users can create, update, delete, retrieve all contacts, or get a single contact they have created.
- **Data Security**: Prevent users from managing contacts of different users and ensure password hashing for security.
- **Access Control**: Users must have a valid access token to use private endpoints.
- **Error Handling**: Proper error messages with status codes are provided in case of any error.
- **JWT Authentication**: Users receive a signed JWT access token upon successful login for accessing private endpoints.

## Tools & Libraries Used

- **Node.js**: Core module used for HTTP, path, and file system operations.
- **Express**: Framework for building web applications with robust features like routers, body parsers, and request parameters handling.
- **Bcrypt**: Library used for hashing user passwords and comparing hash passwords during login.
- **Dotenv**: Module used to access environment variables via Node.js process core module.
- **Express-async-handler**: Middleware for handling exceptions inside async Express routes and passing them to error handlers.
- **Jsonwebtoken**: Library used for adding authentication to APIs by signing and verifying access tokens.
- **MongoDB**: NoSQL database used to store data in document/collections format using JSON objects.
- **Mongoose**: Library used to create object model design schema for entities like Contacts and Users, providing methods to communicate with MongoDB.
- **Nodemon**: Utility used to detect file changes and automatically restart the server, especially useful for development purposes.

## How to Use

To get started with the Contact Manager API, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Set up environment variables: Create a `.env` file and configure necessary variables like MongoDB connection URL, JWT secret, etc.
4. Run the server: `npm run dev`
5. Use Thunder Client or any API testing tool to test the endpoints.

Feel free to explore the codebase and customize it according to your requirements. If you encounter any issues or have suggestions for improvements, please create an issue in this repository. Happy coding!
