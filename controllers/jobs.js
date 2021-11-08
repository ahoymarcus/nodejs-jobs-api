// controllers
const { StatusCodes } = require('http-status-codes');

const Job = require('../models/Job');
const { BadRequestError, NotFoundError } = require('../errors');



const getAllJobs = async (req, res) => {
	console.log('req.user.userId = ', req.user.userId);
	
	const jobs = await Job.find( { createdBy: req.user.userId } ).sort('createdAt');
	
	res.status(StatusCodes.OK).json({ count: jobs.length, jobs });
};


const createJob = async (req, res) => {
	req.body.createdBy = req.user.userId;
	
	console.log('\nreq.body = ', req.body);
	
	const job = await Job.create( req.body );
	
	res.status(StatusCodes.CREATED).json({ job });
};


const getJob = async (req, res) => {
	console.log('req.params = ', req.params);
	
	// Lembrar que o obj user vem de req auth...
	const { 
		user: { userId }, 
		params: { id: jobId } 
	} = req; 
	
	const job = await Job.findOne({ 
		_id: jobId,
		createdBy: userId
	});
	
	if (!job) {
		throw new NotFoundError(`No job with id ${jobId}`);
	}
	
	res.status(StatusCodes.OK).json({ job });
};


const updateJob = async (req, res) => {
	console.log('req.params = ', req.params);
	
	const { 
		body: { company, position },
		user: { userId },
		params: { id: jobId }
	} = req;
	
	if (company === '' || position === '') {
		throw new BadRequestError('Neither company or position can be empty');
	}
	
	const job = await Job.findByIdAndUpdate({
		_id: jobId,
		createdBy: userId
	}, req.body, { 
		new: true, 
		runValidators: true 
	});
	
	if (!job) {
		throw new NotFoundError(`No job with the id ${jobId}`);
	}
	
	res.status(StatusCodes.OK).json({ job });
};


const deleteJob = async (req, res) => {
	
	
	res.send('deleteJob');
};




module.exports = {
	getAllJobs,
	createJob,
	getJob,
	updateJob,
	deleteJob
}





