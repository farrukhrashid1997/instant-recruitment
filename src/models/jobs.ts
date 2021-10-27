import { DataTypes, Model } from "sequelize";
import { JobAttributes } from "../types/jobs";
import { sequelize } from "../utils/database";

interface JobInstance extends Model, JobAttributes {}

const Jobs = sequelize.define<JobInstance>("jobs", {
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
