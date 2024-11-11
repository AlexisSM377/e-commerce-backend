module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'database-ecommers.cvoogg2sw6bq.us-east-1.rds.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'postgres'),
        user: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'Q9XM9m)#88'),
        ssl: {
          rejectUnauthorized: false, // Habilita SSL si AWS lo requiere
        },
      },
      debug: false,
    },
  });
  