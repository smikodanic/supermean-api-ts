const config_env_prod = {
  url: 'http://api.supermean.org',
  name: 'produsction',
  server: {
    virtualHost: false,
    domain: 'api.supermean.org',
    port: process.env.PORT || 9987
  },
  mongodb: {
    enabled: true,
    uri: process.env.MONGODB_URI || 'mongodb://supermean_user:xxxxx@5.189.161.70:27017/supermean'
  }
};

export default config_env_prod;
