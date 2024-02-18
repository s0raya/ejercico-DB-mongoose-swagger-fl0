const express = require('express');
const app = express();
const { dbConnection } = require('./config/config.js');
const routes = require('./routes/tasks.js');
const swaggerUI = require('swagger-ui-express');
const docs = require('./docs/index.js');

const PORT = process.env.PORT || 3000;

app.disable('x-powered-by');
app.use(express.json());

app.use('/', routes);

dbConnection();

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})