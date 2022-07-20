exports.getDashboard = async(req , res ) =>{
    res.render("admin/blogs" , {
        pageTitle: "بخش مدیریت",
        path: "/dashboard",
        layout:"./layouts/dashLayout",
        fullname: req.user.fullname
    })
}