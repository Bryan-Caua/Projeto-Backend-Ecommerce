import { DataSource, DataSourceOptions } from "typeorm"
import "dotenv/config"
import path from "node:path";



const DataSourceConfig = () : DataSourceOptions => {

    const entitiesPath = path.join(__dirname, "entities/**.{js,ts}")
    const migrationsPath = path.join(__dirname, "migrations/**.{js,ts}")

    if(process.env.DATABASE_URL){
        throw new Error("Env var does not exist")
    }

    return{
        type: "postgres",
        url: process.env.DATABASE_URL,
        synchronize: false,
        logging: true,
        entities: [entitiesPath],
        migrations: [migrationsPath]
    }
}

const appDataSource: DataSource = new DataSource(DataSourceConfig())

export {appDataSource}