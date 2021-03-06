import dotenv from "dotenv";

dotenv.config();

export const developmentEnv = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  ssl: false,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/migrations",
  },
};

export const productionEnv = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: ["./build/src/entities/*.js"],
  migrations: ["./build/src/migrations/*.js"],
  cli: {
    migrationsDir: "./build/src/migrations",
  },
  extra: {
    ssl: { rejectUnauthorized: false },
  },
};

module.exports =
  process.env.NODE_ENV === "production" ? productionEnv : developmentEnv;
