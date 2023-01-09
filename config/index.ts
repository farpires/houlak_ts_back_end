import dotenv from 'dotenv';


if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}

export default {
    PORT: process.env.PORT,
    MONGO: process.env.MONGO,
    DATABASE: {
        database: process.env.DATABASE,
        username: process.env.USER_NAME,
        password: process.env.PASSWORD,
        host: process.env.HOST_NAME,
        dialect: process.env.DIALECT,
      },
}