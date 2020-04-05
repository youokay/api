// in development
let obj = {
  DATABASE_URL: `mongodb://localhost`,
  DATABASE_NAME: 'youokay',
  SERVICE_URL: `http://localhost`,
  SERVICE_PORT: `3000`,
};
// in production
if (process.env.NODE_ENV === 'production') {
  obj = Object.assign({}, obj, {
    DATABASE_URL: 'mongodb://database',
    SERVICE_URL: process.env.SERVICE_URL,
    SERVICE_PORT: `4444`
  });
}

module.exports = obj;