import mysql from 'mysql2/promise';
import sql from 'sql-template-strings';

class Database {
    constructor() {
        this.pool = mysql.createPool({
            host: 'localhost',
            user: 'nico',
            password: 'nico2003',
            database: 'owo_mi'
        });
    }

    async query(query, values) {
        const [rows] = await this.pool.execute(query,values);
        return rows;
    }

    async close() {
        this.pool.end();
    }
}

const database = new Database();

export default database;