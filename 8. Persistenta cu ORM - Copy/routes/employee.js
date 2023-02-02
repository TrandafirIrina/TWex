const Employee = require("../models/employee");
const {Op} = require("sequelize")
const router = require("express").Router();

router.route("/employees")
.get(async(req,res)=>{
    try{
        // SELECT *
        //const employees = await Employee.findAll();

        //SELECT WHERE salary>minSalary
        // const {minSalary} = req.query;
        // const employees = await Employee.findAll({
        //     where: minSalary?{salary:{[Op.gt]:minSalary}}:undefined
        // });

        //SELECT WHERE lastName=name
        // const {name} = req.query;
        // const employees = await Employee.findAll({
        //     where: name?{lastName:{[Op.eq]:name}}:undefined 
        // });

        // PROIECTIE
        // const employees = await Employee.findAll({attributes:[
        //     'firstName', 'lastName'
        // ]});
        // const {simplified} = req.query;
        // const employees = await Employee.findAll({
        //     attributes:simplified?{exclude: 'id'}:undefined,});
        
        // ORDONARE
        const {sort} = req.query;
        const employees = await Employee.findAll({
            order:sort?[[sort,"ASC"]]:undefined,});
        return res.status(200).json(employees);
    }catch(err){
        return res.status(500).json(err.stack)
    }
})
.post(async(req,res)=>{
    try{
        // INSERT
        const newEmployee = await Employee.create(req.body)
        return res.status(200).json(newEmployee);
    }catch(err){
        return res.status(500).json(err.stack)
    }
})

router.route("/employees/:id")
.get(async(req,res)=>{
    try{
        // SELECT DUPA CHEIA PRIMARA
        const employees = await Employee.findByPk(req.params.id);
        if(employees)
        {
            return res.status(200).json(employees);
        }else{
            return res.status(404).json({error:`Employee with id ${req.params.id} not found`})
        }
    }catch(err){
        return res.status(500).json(err.stack)
    }
})
.put(async(req,res)=>{
    try{
        // UPDATE
        const employees = await Employee.findByPk(req.params.id);
        if(employees)
        {
            const updateEmployee = await employees.update(req.body);
            return res.status(200).json(updateEmployee);
        }else{
            return res.status(404).json({error:`Employee with id ${req.params.id} not found`})
        }
    }catch(err){
        return res.status(500).json(err.stack)
    }
})
.delete(async(req,res)=>{
    try{
        const employees = await Employee.findByPk(req.params.id);
        if(employees)
        {
            const deleteEmployee = await employees.destroy();
            return res.status(200).json({message:`Employee with id ${req.params.id} was deleted`})
        }else{
            return res.status(400).json({error:`Employee with id ${req.params.id} not found`})
        }
    }catch(err){
        return res.status(500).json(err.stack)
    }
})

module.exports = router