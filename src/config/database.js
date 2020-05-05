module.exports = {
  development: {
    username: "postgres",
    password: "example",
    database: "petsaojoao_dev",
    host: "localhost",
    dialect: "postgres",
    define: {
      underscored: true,
      freezeTableName: true,
    },
  },
  test: {
    username: "postgres",
    password: "example",
    database: "petsaojoao_test",
    host: "localhost",
    dialect: "postgres",
    define: {
      underscored: true,
      freezeTableName: true,
    },
  },
  production: {
    username: "postgres",
    password: "example",
    database: "petsaojoao",
    host: "localhost",
    dialect: "postgres",
    define: {
      underscored: true,
      freezeTableName: true,
    },
  },
};
