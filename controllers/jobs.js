// controllers
const { StatusCodes } = require('http-status-codes');

const Job = require('../models/Job');
const { BadRequestError, NotFoundError } = require('../errors');



const getAllJobs = async (req, res) => {
	const jobs = await Job.find( {} );
	
	
	res.status(StatusCodes.OK).json({ jobs });
};


const createJob = async (req, res) => {
	req.body.createdBy = req.user.userId;
	
	console.log('\nreq.body = ', req.body);
	
	const job = await Job.create( req.body );
	
	res.status(StatusCodes.CREATED).json({ job });
};


const getJob = async (req, res) => {
	console.log('req.params = ', req.params);
	
	const job = await Job.findOne( req.body );
	
	res.status(StatusCodes.OK).json({ job });
};


const updateJob = async (req, res) => {
	console.log('req.body')
	
	res.send('updateJob');
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





