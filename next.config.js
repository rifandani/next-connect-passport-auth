const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  env: {
    MONGO_URI:
      'mongodb://rifandani:rifandani@cluster0-shard-00-00-rqaap.mongodb.net:27017/next-passport?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primaryPreferred&appname=MongoDB%20Compass&ssl=true',
    ROOT_URL: 'http://localhost:3000', // http://localhost:3000 or production URL
  },
});
