module.exports = (sequelise, DataTypes) => {
  const Example = sequelise.define("Example", {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: "example",
      unique: true,
    },
  });
  Example.associate = (models) => {};

  return Example;
};
