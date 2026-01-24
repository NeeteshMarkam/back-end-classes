const express = require('express');
const app = express();


app.use(express.json())

const notes =[]

app.get('/',(req,res)=>{
    res.send('home page')
})
app.post('/notes',(req,res)=>{



    console.log(req.body);
    notes.push(req.body)
    console.log(notes);
    
    res.send('created note');
    
})
app.get("/notes",(req,res)=>{
    res.send(notes)
})
app.delete('/notes/:index',(req,res)=>{
    delete notes[req.params.index]

    res.send('note deleted successfully')
})

app.patch('/notes/:index',(req,res)=>{
notes[req.params.index].role = req.body.role
res.send('note update successfully')
})

app.listen(3000,()=>{
    console.log(`server is running`);
    
})