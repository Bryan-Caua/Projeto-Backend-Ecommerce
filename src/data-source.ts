import { DataSource } from "typeorm"
import "dotenv/config"
import path from "path";

const entitiesPath = path.join(__dirname, "entities/**.{js,ts}")

const migrationsPath = path.join(__dirname, "entities/**.{js,ts}")

const AppDataSource = new DataSource(
    process.env.NODE_ENV === "test" ?
    {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: [entitiesPath]
    } :
    {
        type: "postgres",
        host: process.env.PGHOST,
        port: parseInt(process.env.PGPORT!),
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        logging: true,
        synchronize: false,
        entities: [entitiesPath],
        migrations: [migrationsPath]
    }
)

export default AppDataSource