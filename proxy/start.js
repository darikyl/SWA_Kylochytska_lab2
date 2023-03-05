//start.js
const app = require('./server.js');
const config = require('./config.js');

app.listen(config.get('port'), () => {
    console.log('Server start at localhost:3001');
});
