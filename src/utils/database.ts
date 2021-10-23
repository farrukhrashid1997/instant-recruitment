import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("instant-recruitment", "root", "password", {
  dialect: "mysql",
  host: "localhost",
});

export const initDb = () => {
  return sequelize.sync();
};
