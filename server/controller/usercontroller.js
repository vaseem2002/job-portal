import Job from "../models/jobs.js";
import User from "../models/user.js";
import JobApplication from "../models/jobapplication.js";


export const getUserData = async (req,res) => {
     try{
       const userId = req.auth.userId

       const user = await User.findById({userId})

       if(!user){
        return res.json({success:false,message:'user not found'})
       }

       res.json({success:true,user})

     } catch(err){
        console.log(err)
        res.json({success:false,message:err.message})
     }
}

export const applyforJob = async (req,res) => {
    try{
       const {jobId} = req.body;

       const userId = req.auth.userId

       const isAlreadyApplied = await JobApplication.findById({jobId,userId})

       if(isAlreadyApplied.length > 0){
        return res.json({success:false,message:'already applied job'})
       }

       const jobData = await Job.findById({jobId})

       if(!jobData){
        return res.json({success:false,message:'job not found'})
       }

       await JobApplication.create({
        companyId:jobData.companyId,
         userId,
         jobId,
         date:Date.now()
       })
       
        res.json({success:true,message:'applied successfully'})

    } catch(err){
        console.log(err)
        res.json({success:false,message:err.message})
    }
}

export const getJobapplication = async (req,res) => {
    try{
        const userId = req.auth.userId

      
       const application = await JobApplication.findById({userId})
          .populate('companyId,email,name,password')
          .populate('jobId,title,description,location,level,salary')
           .exec()
        
            if (!application) {
            return res.json({success:false,message:'No job application found for this user'})
        }
        return res.json({success:true,application})

        
    } catch(err){
        console.log(err)
        res.json({sucess:false,message:err.message})
    }
}