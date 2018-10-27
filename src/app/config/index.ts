import config_env_dev from './env/development';
import config_env_prod from './env/production';
const config_env = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? config_env_dev : config_env_prod;

const config = {
  api_name: 'Supermean API',
  api_key: '12345678',
  api_secret: 'xztR!555&aaxxsswq23__',
  env: config_env
};



export default config;
