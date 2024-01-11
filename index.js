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
      const name = req.body;
      console.log(req.body);
        
       const createCourse = await prisma.class.create({
            data: {
              created_by: req.body.created_by,
              updated_by: req.body.updated_by,
              name_en: req.body.name_en,
              name_bn: req.body.name_bn,
              date: req.body.date,
              location: req.body.location?.currentKey, 
              radio: req.body.paidstatus
            },
          })
        
        console.log(name); 
        console.log(createCourse); 
        res.status(201).json( {
          "name_bn" : "bng"

        } )
      });

  // *** FOR READ COURSES ***
  app.get('/readCourse',  async (req, res) =>{
    
  const readCourse = await prisma.class.findMany()
  // console.log(readCourse); 
      res.status(207).json(
        readCourse
      )
    });

  // *** FOR UPDATED COURSES ***  
  app.put('/updateCourse/:id', async (req, res) =>{
    const updateCourse = req.body; 
    console.log( req.params.id); 
    const demo = await prisma.class.update({  
      
      where: {
        id:  parseInt(req.params.id)
      },
      data: req.body
      
    })
    console.log(demo) 
    console.log(updateCourse); 
    res.status(209).json(
      demo
      )
  });

  // *** FOR DELETE COURSES *** 
  app.delete('/deleteCourse/:id', async (req, res) =>{
  console.log("delete id.......", req.params.id);

    const mysql_del = await prisma.class.delete({  
      
      where: {
        id: parseInt(req.params.id)  
        },
    })
    console.log(mysql_del)
    res.status(214).json({})
  });

// *** FOR FORM  ***





 


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
