import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

export const sequelize = new Sequelize('railway', 'postgres', 'Y2meu9P1mjLT2Ew7vzd0', {
    host: 'containers-us-west-139.railway.app',
    port: '5846',
    dialect: 'postgres'
});