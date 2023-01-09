import { Sequelize,Dialect } from "sequelize";
import CONFIG from "../config/index";

const {database, username, password, host, dialect } = CONFIG.DATABASE;
console.log(username);
const db = new Sequelize(database as string,'root', password as string,{
    host: host as string,
    dialect: dialect as Dialect,
    // logging: false,
});

export default db;
