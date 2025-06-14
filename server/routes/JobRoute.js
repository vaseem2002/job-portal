import express from 'express'
import { getJobs } from '../controller/Jobcontroller.js'
import { getJobById } from '../controller/Jobcontroller.js'

const JobRouter = express.Router()


JobRouter.post('/',getJobs)
JobRouter.post('/:id',getJobById)

export default JobRouter
