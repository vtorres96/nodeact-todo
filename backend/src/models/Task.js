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
      allowNull: false,
    },
    description: {
      type: DataType.STRING,
      allowNull: false,
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