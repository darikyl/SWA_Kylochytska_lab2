const convict = require('convict')

const config = convict({
   port: {
      doc: 'The main port to bind', // опис призначення
      format: 'port',                // формат поля String, ipadress, port, array, url, int, timestamp, *
      default: 3001,
      env: 'PORT',                   // назва змінної у файлі .env
      arg: 'port'
   },  
   url:{
      doc: 'The url application \"api\".',
      format: String,
      default: 'http://localhost:3000/',
      env: 'NODE_URL'
   }
});

config.validate({ allowed: 'strict' }); // виконувати перевірку параметрів

module.exports = config;
