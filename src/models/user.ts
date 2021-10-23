import { DataTypes, Model, Optional } from "sequelize";
import { UserAttributes } from "../types/user";
import { sequelize } from "../utils/database";

interface UserInstance extends UserAttributes, Model {}

const Users = sequelize.define<UserInstance>("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  companyName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Users;
