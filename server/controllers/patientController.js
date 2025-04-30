const prisma=require('../prisma/prismaClient')


exports.CreatePatient=async (req,res)=>{
    try {
        const {firstName,lastName,email,DOB,bloodGroup,address,userId}=req.body;
        const profilePhoto = req.file ? req.file.path : null;
        if(!firstName||!email||!userId){
            throw new Error("please full properly")
        }
        const result=await prisma.user.create({
            data:{
                userId:parseInt(userId),
                firstName,
                lastName,
                email,
                DOB,
                bloodGroup,
                address,
                profilePhoto,
            }
        })

        res.status(200).json({
            success:true,
            msg:"Patient user created successfully",
            data:result
        })

    } catch (error) {
        throw new Error(error);
    }
}


exports.updatePatient=async (req,res)=>{
    try {
        const id=req.params.id;
        const {DOB,bloodGroup,address}=req.body;
        const profilePhoto = req.file ? req.file.path : null;
   
        const result=await prisma.user.update({
          where:{
            id:id
          },
           data:{
           DOB,
           bloodGroup,
           address,
           profilePhoto
        }
        })
        res.status(200).json({
            success:true,
            msg:"Patient user updated successfully",
            data:result
        })
    } catch (error) {
        throw new Error(error);
    }
}


