import express from 'express'
import { getUserData,applyforJob,getJobapplication } from '../controller/usercontroller.js'

const UserRouter = express.Router()

UserRouter.get('/user',getUserData)
UserRouter.post('/apply',applyforJob)
UserRouter.get('/applicatons',getJobapplication)

export default UserRouter