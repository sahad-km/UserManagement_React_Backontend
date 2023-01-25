const User = require('../../models/user/userModel');
const registerLoad = (req,res)=> {
    res.render('./user/register/register',{title:'Create Account',msg:''});
}

const insertDetails = async (req,res) => {
    const exist_user = await User.findOne({email:req.body.email});
        if(exist_user) {
            res.json({ status: 'fail'})
        }else {
        const user = new User({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            mobNumber:req.body.mobNum,
            email:req.body.email,
            password:req.body.password,
            userType:req.body.userType
        });
        await user.save();
        res.json({ status: 'ok' })
    }
}

module.exports = {registerLoad,insertDetails};