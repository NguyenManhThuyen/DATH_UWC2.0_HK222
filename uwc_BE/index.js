const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const rfs = require('rotating-file-stream');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

dotenv.config();

const port = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV == 'production';
const app = express();

app.use(helmet());

const accessLogStream = rfs.createStream('access.log', {
  interval: '1d',
  path: path.join(__dirname, 'log'),
});
app.use(
  isProduction
    ? morgan('combined', { stream: accessLogStream })
    : morgan('dev'),
);

app.use(cors());
app.use(express.json());

import options from './src/configs/swagger.config';
const specs = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

app.get('/ping', (req, res) => {
  res.json({
    message: 'pong',
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
