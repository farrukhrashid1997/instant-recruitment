import { DataTypes } from "sequelize";
import { sequelize } from "../utils/database";

const Jobs = sequelize.define("jobs", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
  },
  additionalRemarks: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

export default Jobs;
