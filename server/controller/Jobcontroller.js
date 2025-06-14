import Job from "../models/jobs.js";

export const getJobs = async (req,res) => {
    try{
      const job = await Job.find({visible:true}).populate({path:'companyId',select:'-password'})


       res.json({success:true,job})

    } catch(err){
        console.log(err)
        req.json({success:false,message:err.message})
    }
}

export const getJobById = async (req,res) => {
    try{
     const {id} = req.params

     const job = await Job.findById(id).populate({path:'companyId',select:'-password'})

     if(!job){
        return res.json({success:false,message:'job not found'})
     }

     res.json({success:true,job})
    } catch(err){
        console.log(err)
        res.json({success:false,message:err.message})
    }
}