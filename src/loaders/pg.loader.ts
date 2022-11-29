import knex from "knex";
import Container, { Service } from "typedi";

@Service()
export class PostgresSQLServices {  
    init() {
        const DATABASE_CREDENTIALS = {
            host: process.env.PGHOST,
            user: process.env.PGUSER,
            password: process.env.PGPASSWORD,
            database: process.env.PGDATABASE,
            port: process.env.PGPORT
        }

        const pgKnex = knex({
            client: 'pg',
            connection: DATABASE_CREDENTIALS,
            pool: { min: 0, max: 1 }
        })

        Container.set('pg.Knex', pgKnex);
    }

}
