const { CustomAPIError } = require('../errors')
const { StatusCodes } = require('http-status-codes')



const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
	
	let customError = {
		// set default
		statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
		msg: err.message || 'Something went wrong, try again later'
	};
	
	if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  
	// Tornar devolução de erros do Mongoose mais
	// user friedly
	if (err.code && err.code === 11000) {
		customError.msg = `Duplicate value entered for ${Object.keys(err.keyValue)} field. Please, choose another value`;
		customError.statusCode = 400;
	}
	
	
	// return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
	return res.status(customError.statusCode).json({ msg: customError.msg });
}



module.exports = errorHandlerMiddleware




