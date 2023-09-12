const userModel = require("../model/userSchema");
const emailValidator=require("email-validator")

// const signup = async (req,res,next)  =>   { 
//     const {Name,email,password,confirmpassword} = req.body;
//     console.log(Name,email,password,confirmpassword);

//     if(!Name ||!email ||!password || !confirmpassword) {
//      return   res.status(400).json({
//             success: false,
//             message: "All fields are not filled",
//         });
//     }

//     const validEmail= emailValidator.validate(email);
//     if(!validEmail){
//         return   res.status(400).json({
//             success: false,
//             message: "please provide valid email",
//         });
//     }
//     //    check for password  and confirm password match or not
//     if(password !== confirmpassword){
//         return      res.status(400).json({
//             success : false ,
//             message :"Passwords do not match"
//         });
//     }
//     try {
        
//         const userInfo =  new userModel(req.body);
//         const result = await userInfo.save();
    
//         res.status(200).json({
//             success: true,
//             data: result
//           });
//     } catch (error) {
//         if(error.code === 11000){
//             return res.status(400).json({
//                 success: false,
//                 message:`Account with  Same Email already exist ${email}` 
//             });
//         }

//             res.status(400).json({
//                 success:false,
//                 message: error.message,
//             });
//     }
 
// }

const signup = async (req, res, next) => {
    const { name, email, password, confirmpassword } = req.body;
    console.log(name, email, password, confirmpassword);
    
    if (!email || !name || !password || !confirmpassword) {
      return res.status(400).json({
        succuess: false,
        message: "All filed are required ",
      });
    }
    const validEmail = emailValidator.validate(email);
    if (!validEmail) {
      return res.status(400).json({
        succuess: false,
        message: "email is not valid",
      });
    }
  
    if (password !== confirmpassword) {
      return res.status(400).json({
        succuess: false,
        message: "password not match",
      });
    }
    try {
      const userInfo = userModel(req.body);
      const result = await userInfo.save();
      return res.status(200).json({
        succuess: true,
        data: result,
      });
    } catch (error) {
      if (error.code === 11000) {
        return res.status(400).json({
          succuess: false,
          message: "Account is already registered with this email id ",
        });
      }
      return res.status(400).json({
        succuess: false,
        message: error.message,
      });
    }
  }
module.exports ={
    signup
}