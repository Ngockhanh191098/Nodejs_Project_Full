const { PERMISSION_ADMIN, PERMISSION_MEMBER } = require('../config/permission.config');
const db = require('../models/db.model');
const UserModel = db.User;

//verify if it's admin permission
const isAdmin = async( req, res, next ) => {
    const id = req.userID
<<<<<<< HEAD
    const user = await UserModel.findOne({ where: { id }});  
=======
 
    const user = await UserModel.findOne({ where: { id }});      
>>>>>>> a6459443fff63791ec6988a0de71a7d34ce83d98
    if (user.iamRole === PERMISSION_ADMIN ){       
        return next();
    }
    return res.status( 403 ).json({
        messege:"forbidden!require admin role",
    });
};
//very if it;s member permission
const isMember = async( req, res, next ) => {
    const id = req.userID;
    const user = await UserModel.findOne({ where: { id }});
<<<<<<< HEAD
=======
    console.log(user.dataValues.iam_role);
>>>>>>> a6459443fff63791ec6988a0de71a7d34ce83d98
    if (user.dataValues.iamRole === PERMISSION_MEMBER ){     
        return next();        
    }
    return res.status( 403 ).json({
        messege:"forbidden!require member role",
    });
};


const authJwt = {  
    isAdmin,   
    isMember,
};
module.exports = authJwt;