const user = require('../../models/user/userModel');
const dashboardLoad = async (req,res)=> {
    const userDetails = await user.findOne({email:req.body.emailTosend});
    res.json({userDetails})
}

const uploadImg = async(req,res) => {
    try {
        const {id} = req.params
        const {url} = req.body
        const profile = await user.findByIdAndUpdate(id,{image:url})
        await profile.save()
        res.json({profile})
    } catch(err) {
        console.log(err)
    }
}

const sessionCheck = (req,res,next) => {
    if(req.session.userId) {
        if(req.session.userType == 'user') {
            next();
        }else {
            res.redirect('/admin/dashboard');
        }
    }else {
        res.redirect('/');
    }
}

module.exports = {dashboardLoad,sessionCheck,uploadImg};