import express from 'express'
import { registercompany,logincompany ,getcompany,postJob,getCompanyJobApplicants,getCompanyPostedJobs} from '../controller/Companycontroller.js'

const CompanyRouter = express.Router()

CompanyRouter.post('/register',registercompany)
CompanyRouter.post('/login',logincompany)
CompanyRouter.get('/company',getcompany)
CompanyRouter.post('/post-job',postJob)
CompanyRouter.get('/applicants',getCompanyJobApplicants)
CompanyRouter.get('/list-jobs',getCompanyPostedJobs)


export default CompanyRouter