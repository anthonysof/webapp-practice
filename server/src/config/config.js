module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'larpdb',
        user: process.env.DB_USER || 'larpdb',
        password: process.env.DB_PASS || 'larpdb',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './lapdb.sqlite'
        }
    }
}
