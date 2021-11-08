// MODELS
const mongoose = require('mongoose');


const JobSchema = mongoose.Schema({
	name: String,
	status: String
});



module.exports = mongoose.model('Job', JobSchema);











