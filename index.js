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
      console.log(req.body.created_by);
        
       const createCourse = await prisma.class.create({
            data: {
              created_by: req.body.created_by,
              updated_by: req.body.updated_by,
              name_en: req.body.name_en,

              name_bn: req.body.name_bn,
            },
          })
        
        console.log(name); 
        console.log(createCourse); 
        res.status(201).json({
        newCourses 

        })
      });

  // *** FOR READ COURSES ***
  app.get('/readCourse',  async (req, res) =>{
    
  const readCourse = await prisma.class.findMany()
  console.log(readCourse); 
      res.status(207).json({
      
      })
    });

  // *** FOR UPDATED COURSES ***  
  app.put('/updateCourse/:id', async (req, res) =>{
    const updateCourse = req.body; 
    console.log( req.params.id); 
    const demo = await prisma.class.update({  
      
      where: {
        id: 18
      },
      data: {
        created_by: 'dd',
      },
    })
    console.log(demo) 
    console.log(updateCourse); 
    res.status(209).json({
      
      })
  });

  // *** FOR DELETE COURSES *** 
  app.delete('/deleteCourse/:id', async (req, res) =>{
    const deleteCourse = req.body;
    console.log( req.params.id);
    const mysql_del = await prisma.class.delete({  
      
      where: {
        id: 23
      },
    })
    console.log(mysql_del)
    console.log(deleteCourse); 
    res.status(214).json({
      
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
