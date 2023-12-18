const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()


const port = process.env.PORT || 5000; 

app.use(cors()); 
app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

async function run(){
  try{
  // *** FOR CREATE COURSES ***
    app.post('/createCourse',  async (req, res) =>{
      const name = req.body.created_by;
      console.log("................",req.body.craeted_by);
        
       const createCourse = await prisma.class.create({
            data: {
              created_by: req.body.craeted_by,
              updated_by: req.body.updated_by,
              name_en: req.body.name_en,
              name_bn: req.body.name_bn,
            },
          })
        
        console.log(createCourse); 
        res.status(201).json({
        newUser

        })
      
      });

  }
  finally{ 
  }

}
run().catch(console.dir); 

app.get('/', (req, res) => {
  res.send('Hello expresss')
})

app.listen(port, () => {
  console.log(`listening at ${port}`)
})