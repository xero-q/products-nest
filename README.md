### Backend for Products

#### Steps to Install and Run
- You need a PostgreSQL server with a blank database
- Create an `.env` file in the root of the project and write there the following variables with the database connection params:
```sh
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
```
- Install dependencies. Run `npm install`.
- Run `npm run start:dev`. NestJS will create the database structure on the first running.