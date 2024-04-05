Welcome to the Product API! 
This API allows users to perform CRUD (Create, Read, Update, Delete) operations. Please note that JWT authentication is included to protect the POST route which is used for creating products.

**Setup Instructions**:

1. Clone the Repository: 
Clone the repository from GitHub to your local machine:
<git clone https://github.com/<username>/MERN-api.git>

2. Install Node.js
Go to the node website and install it according to your OS i.e. windows, mac, etc. Once installed, run a <node -v> to confirm it is actually installed.

3. Install Dependencies:
Navigate to the project directory and install the required dependencies using npm(or yarn):
  <cd MERN-api>
  <npm install MongoDB>
  <npm install nodemon>
  <npm install express -g>
  <npm install jwtwebtoken>
  <npm install Mongoose>

4. Generate a package.json
<npm init -y>

5. Set Environment Variables:
Create a .env file in the root directory and specify the following environment variables:
<PORT=3000  (or whichever you prefer)>
<MONGO_URI=your_mongodb_setup>

6. Start the Server:
Run the following command to start the server:
<npm run start>

7. Accessing the API:
The API will be accessible at http://localhost:3000.

**ENDPOINTS**
GET /products
Fetches all products.

GET /products/:id
Fetches a specific product by ID

POST /products
Requires JWT authentication.
Creates a new product. Ensure you have a valid JWT token before making a request to this endpoint.

PUT /products/:id
Updates an existing product by ID.

DELETE /products/:id
Deletes a product by ID.

**Authentication:**
To obtain a JWT token for accessing the protected POST route:

  - Send a POST request to /api/login with valid credentials (i.e. username and password). This authenticates user.
  - Upon successful authentication, the response you get will contain a JWT token. This is how you receive the token.
  - Include the JWT token in the Authorization header as a Bearer token when making requests to the protected POST route. To use it. Dont forget to put "Bearer" before the token.

**Points to Note**
Keep the JWT secret key secure and never expose it publicly.
That's it! You're now ready to use the Product API. Thank you for using it.
