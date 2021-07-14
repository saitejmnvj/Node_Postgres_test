module.exports = {
    HOST: "postgres-svc.default.svc.cluster.local",
    PORT: 5432,
    USER: "postgres",
    PASSWORD: "mysecretpassword",
    DB: "testdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };