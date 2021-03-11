# product-mysql

## Tutorial

1. Go to server directory
   > cd server
2. Install depedency

   > npm install

3. Configure database, edit username and password based on your mysql db

   > cd config/config.json

4. Create and migrate database

   > npx sequelize db:create
   > npm sequelize db:migrate

5. Run server

   > node app.js

6. Go to client directory

   > cd client

7. Install depedency

   > npm install

8. Run client

   > npm start
