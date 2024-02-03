module.exports = {
  client: 'pg',
  connection: process.env.DB_LINK,
  migrations: {
    directory: './knex/migrations',
  },
};
