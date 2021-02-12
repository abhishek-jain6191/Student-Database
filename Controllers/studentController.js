const express= require('express')
var router =express.Router()
const mongoose =require('mongoose')
const Student = mongoose.model('Student')



router.get('/',(req,res) =>{
    res.render('student/addoredit',{
        viewTitle:  'Insert Student'
    })
})


router.post('/',(req,res) => {
    if (req.body.__id== "") {
        insertRecord(req,res)
    }
    else{
        updateRecord(req,res)
    }
})

function insertRecord(req,res){
    var student=new Student()
    student.fullName=req.body.fullName
    student.email=req.body.email
    student.posApplied=req.body.posApplied
    student.highestQ-req.body.highestQ
    student.save((err,doc)=>{
            if(!err) {
                res.redirect('/student/list')
            }
            else{
                console.log("Error"+err)
            }
    })
}

function updateRecord(req,res){
    Student.findOneAndUpdate({__id:req.body.__id},req.body,{new:true},(err,doc)=>{
        if(!err){
            res.redirect('student/list')
        }else{
            console.log("Error "+err)
        }
    })
}

router.get('/list',(req,res)=>{
    Student.find((err,docs)=>{
        if(!err){
            res.render('student/list',{list:docs})
        }else{
            console.log("error "+str)
        }
    })
})

router.get('/:id',(req,res)=>{
    Student.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.render('student/addoredit',{
                viewTitle: 'Update Student',
                student: doc,
            })
            console.log(doc)
        }
    })
})

router.get('delete/:id', (req,res) =>{
    Student.findByIdAndRemove(req.params.id ,(err,doc)=>{
        if(!err){
            res.redirect('student/list')
        }else{
            console.log("error "+err)
        }
    })
})

module.exports=router