const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Urban Waste Collection API',
      version: '0.1.0',
      description: 'CRUD API for ubran waste collecting activities',
    },
    servers: [
      {
        utl: 'htpp://localhost:3000',
      },
    ],
  },
  apis: ['../**/*.route.js'],
};

// module.exports = {
// options: options,
// };
export default options;
