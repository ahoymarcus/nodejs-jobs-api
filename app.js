// https://www.youtube.com/watch?v=qwfE7fSVaZM
// 9 hrs  13' 00''
require('dotenv').config();
require('express-async-errors');
const express = require('express');

// extra security packages
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

const connectDB = require('./db/connect');
const authenticateUser = require('./middleware/authentication');

// routes
const jobsRouter = require('./routes/jobs');
const authRouter = require('./routes/auth');

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');



const app = express();


// extra package
app.set('trust proxy', 1); // config for Heroku's apps
app.use(
	rateLimiter({
		windowMs: 15 * 60 * 1000, // 15 minutes
		max: 100, // limit each IP to 100 requests per windowMs
	})
);

// basic middleware
app.use(express.json());

// extra packages
app.use(helmet());
app.use(cors());
app.use(xss());


// routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authenticateUser, jobsRouter);




// Errors Middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const port = process.env.PORT || 3000;

const start = async () => {
  try {
		await connectDB(process.env.MONGODB_SRV);
		
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();



