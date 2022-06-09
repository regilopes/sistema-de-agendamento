module.exports = {
   dialect: 'postgres',
   host: 'queenie.db.elephantsql.com',
   username: 'eewzotae',
   password: 'LRfZw5LJWd6GeNonNrvxUPYAwZCzOp-v',
   database: 'eewzotae',
   logging: false,
   define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
   },
   sslmode: "required",
   dialectOptions: {
      ssl: {
         rejectUnauthorized: false,
      },
   },
}