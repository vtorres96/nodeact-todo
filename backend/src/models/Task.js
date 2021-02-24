module.exports = (sequelize, DataType) => {

  const Task = sequelize.define('Task', {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: DataType.STRING,
    },
    description: {
      type: DataType.STRING,
    },
    done: DataType.BOOLEAN,
    deleted: DataType.BOOLEAN,
  },
    {
      timestamps: false,
      tableName: "tasks"
    });
  return Task;
}