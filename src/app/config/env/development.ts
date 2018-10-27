const config_env_dev = {
  url: 'http://api-dev.supermean.org',
  name: 'development',
  server: {
    virtualHost: false,
    domain: 'api-dev.supermean.org',
    port: process.env.PORT || 9988
  },
  mongodb: {
    enabled: true,
    uri: process.env.MONGODB_URI || 'mongodb://supermean_user:12345@5.189.161.70:27017/supermean'
  },
  postgres: {
    user: 'postgres',
    host: 'localhost',
    database: 'testdb',
    password: 'xxxx',
    port: 5432,
  }
};

export default config_env_dev;
