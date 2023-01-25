const User = require('../../models/user/userModel');
// const router = require('../../routes/user/login');
const jwt = require('jsonwebtoken')
const loginLoad = (req,res)=>{
    res.render('./user/login/loginPage',{title:'Login',msg:'',errmsg:''});
}
const loginCheck = async (req,res)=> {
    const {email,password} = req.body;
    let logger = await User.findOne({email:email});
    if(logger) {
        if(password == logger.password) {
            const token = jwt.sign(
                {
                    id: logger._id,
                    email: logger.email,
                    userType: logger.userType
                },
                'secret123'
            )
            if(logger.userType == 'admin') {
                res.json({ status: 'admin',user: token});
            }else {
                res.json({ status: 'user',user: token})
            }
        }else {
            res.json({ status: 'wrong'})
        }
    }else {
        res.json({ status: 'fail'})
    }
}

const logout = (req,res)=> {
    req.session.destroy();
    res.redirect('/');
}

module.exports = {loginLoad,loginCheck,logout};