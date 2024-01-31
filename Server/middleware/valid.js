import zod from "zod"
const emailSchema=zod.string().email()
const passwordSchema=zod.string().min(6).max(30)
export const verify=async(req,res,next)=>{
    try{
        const email=req.body.email
        const password=req.body.password
        if(!emailSchema.safeParse(email))
        {
            throw new error("Invalid email format")
        }
        if(!passwordSchema.safeParse(password))
        {
            throw new error("Password not of required format")
        }
    }catch (error) {
        res.status(401).json({ error: error.message });
    }
}