// https://www.youtube.com/watch?v=qwfE7fSVaZM
// 6 hrs  37' 53''
require('dotenv').config();
require('express-async-errors');
const express = require('express');

// routes
const jobsRouter = require('./routes/jobs');
const authRouter = require('./routes/auth');

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');



const app = express();

app.use(express.json());
// extra packages



// routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);






// Errors Middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();



