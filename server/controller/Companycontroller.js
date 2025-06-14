import Job from "../models/jobs.js"
import bcrypt from 'bcrypt'
import Company from "../models/company.js"
import JobApplication from "../models/jobapplication.js"
import {v2 as cloudinary} from 'cloudinary'

export const registercompany = async (req,res) => {
     try{
       
        const {name,email,password} = req.body;

        const imagefile = req.file

        if(!name || !email || !password || !imagefile){
            return res.json({success:false,message:'missing details'})
        }
      
        const companyExist = await Company.findOne({email})

        if(companyExist){
            return res.json({success:false,message:'company already exist'})
        }
        
        const salt =  bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
      
        const imageUpload = await cloudinary.uploader.upload(imagefile.path)

        const company = await Company.create({
            name,
            email,
            password:hashedPassword,
            image:imageUpload.secure_url,
        })

        res.json({
            success:true,
            company:{
                _id:company._id,
                name:company.name,
                email:company.email,
                password:company.password,
                image:company.image
            },

        })

     } catch(err){
       console.log(err)
       res.json({sucess:false,message:err.message})
     }
}


export const logincompany = async (req,res) => {
     try{
       const {email,password} = req.body
       
       const company = await company.findOne({email})

       if(!company){
        res.json({message:false,success:'invalid email or password'})
       }

        const isPasswordCorrect = await bcrypt.compare(password,company.password)
        
        if(!isPasswordCorrect){
           return res.json({success:false,messsage:'invalid password'})
        }

       return res.json({
            success:true,
            company:{
             _id:company._id,
             name:company.name,
             email:company.email,
             image:company.image,
            }
        })

     } catch(err){
        console.log(err)
        res.json({success:false,message:err.message})
     }
}


export const getcompany = async (req,res) => {
    try{
      const company =  req.company;
       res.json({
        success:true,company
      })
    } catch(err){
        res.json({success:false,message:err.message})
    }
}

export const postJob = async (req,res) => {
    try{
      const {title,description,location,salary,level,category} = req.body;

      const companyId = req.company._id;

      const newJob = new Job({
         title,
         description,
         location,
         salary,
         level,
         companyId,
         category,
         date:Date.now()
      })
      await newJob.save();

      res.json({
        success:true,
        newJob
      })

    } catch(err){
        res.json({success:false,message:err.message})
    }
}

export const getCompanyJobApplicants = async (req,res) => {

}

export const getCompanyPostedJobs = async (req,res) => {
  
}