const express = require('express')
const Sequelize = require('sequelize')
const cors = require('cors')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'sample.db',
    define:{
        timestamps: false
    }
}
)

const Note = sequelize.define('note',{
    content: Sequelize.STRING
})

const app=express()
app.use(cors())
app.use(express.json())

app.get('/notes',async(req,res)=>{
    try{
        const notes = await Note.findAll();
        res.status(200).json(notes)
    }catch(e){
        console.warn(e)
        res.status(500).json({message:'server error'})
    }
})

app.post('/notes', async(req, res)=>{
    try{
        await Note.create(req.body)
        res.status(201).json({message: 'Created'})
    }catch(e){
        console.warn(e)
        res.status(500).json({message: 'server error'})
    }
})

app.put('/notes/:id', async(req,res)=>{
    try{
        const note = await Note.findByPk(req.id)
        if(note){
            note = await Note.update(req.body)
            res.status(201).json({message: 'Updated'})
        }else{
            res.status(404).json({message: 'not found'})
        }
    }catch(e){
        console.warn(e)
        res.status(500).json({message: 'server error'})
    }
})

app.delete('/notes/:id', async(req,res)=>{
    try{
        const note = await Note.findByPk(req.params.id)
        if(note){
            await note.destroy()
            res.status(202).json({message: 'accepted'})
        }else{
            res.status(404).json({message:'not found'})
        }
    }catch(e){
        console.warn(e)
        res.status(500).json({message:'server error'})
    }
})

app.listen(8080, async()=>{
    try{
        await sequelize.sync({alter:true})
        console.warn('created tables')
        const sample = ['test1','test2', 'test3']
        sample.forEach(async(e)=>{
            console.warn('creating '+e)
            await Note.create({content: e})
        })
    }catch(e){
        console.warn(e)
    }
})