# API-with-Basic-Validation-and-Error-Handling
This is a simple API with Basic Validation and Error Handling.

## Features

- 📝 **Create**: The user is able to create an item with name and description
- 🔍 **Read**: User can see all the data from the in-memory storage and a certain item trough It's ID.
- 🆕 **Update**: The user is able to update an item with a given ID.
- ❎ **Delete**: User can delete from the in-memory storage an item with a given ID.

## Endpoints

> [!WARNING]  
> For POST & PUT this properties are mandatory: name, description.

- http://localhost:3000/items - GET, POST
- http://localhost:3000/items/:id - PUT, DELETE



## Technologies Used

- Node.js
- Express
- TypeScript

## Dependencies

- cors
- express
- uuid

## Dev-Dependencies

- @types/cors
- @types/express
- @types/node
- @types/uuid
- nodemon
- ts-node
- typescript

### Other Tools
- Git/GitHub
- Postman

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/superGemHere/Simple-In-Memory-API-for-Managing-Items
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the server:
   ```bash
   npm start
   ```

## Have fun Testing! 😁

- I used Postman as a tool for testing the API.