const express = require('express');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger'); // ✅ مسیر درست

const roomRoutes = require('./routes/room.routes');
const messageRoutes = require('./routes/message.routes');

const app = express();

// middlewares
app.use(express.json());

// routes
app.use('/api/rooms', roomRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/rooms', require('./routes/room.routes'));

// swagger
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
