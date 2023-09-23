const jwt=require('jsonwebtoken')

const jwtmiddleware=(req,res,next)=>{

    try{

        //access token from headers
        const token=req.headers['access_token']

        //true / false
        jwt.verify(token,"secretkey123")

        next()
    }
    catch{

        res.status(401).json({
            status:false,
            message:"please login",
            statuscode:401
        })
    }
}

module.exports={jwtmiddleware}
