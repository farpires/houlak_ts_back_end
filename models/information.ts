import { DataTypes } from "sequelize";
import db from "../db/connection";

const Information = db.define('information',{
    ip: {
        type: DataTypes.STRING
    },
    userDate: {
        type: DataTypes.DATE
    } ,
    artistName:{
        type: DataTypes.STRING
    }
})

export default Information;