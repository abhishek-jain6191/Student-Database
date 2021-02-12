const mongoose =   require('mongoose')

mongoose.connect('mongodb://localhost:27017/StudentDB',{
    useNewUrlParser:true, useUnifiedTopology:true},
(err)=> {
        if (!err) {
            console.log('Connection Succeded')

        } else {
            console.log("Connection Error " + err)
        }
    })

require("./student.model")
