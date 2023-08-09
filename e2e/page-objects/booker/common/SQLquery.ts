const { Client } = require('pg');

export class SQLquery {
    async getClient() {
        const client = new Client({
            host: process.env.PG_HOST,
            port: process.env.PG_PORT,
            user: process.env.PG_USER,
            password: process.env.PG_PASSWORD,
            database: process.env.PG_DATABASE,
            ssl: false,
        });
        await client.connect();
        return client;
    }
    async customQuery(query: string) {
        const client = await this.getClient();
        const resp = await client.query(query)
        await client.end()
        return resp
    }
}