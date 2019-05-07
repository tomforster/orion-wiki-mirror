const PostgressConnectionStringParser = require('pg-connection-string');

const connectionOptions = PostgressConnectionStringParser.parse(process.env.DB_URL);

console.log("Connecting to DB...");

module.exports = {
    type: "postgres",
    host: connectionOptions.host,
    port: connectionOptions.port || 5432,
    username: connectionOptions.user,
    password: connectionOptions.password,
    database: connectionOptions.database,
    entities: [
        "entity/**/*.ts"
    ],
    migrations: [
        "migration/**/*.ts"
    ],
    synchronize: true,
    extra: {
        "ssl": process.env.USE_SSL || false
    },
    cli: {
        migrationsDir: "migration"
    },
    // logging: true
};