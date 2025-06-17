# 👩‍💻 USING TYPESCRIPT WITH EXPRESS (tasks API)

This is an application server created with typescript and express.

It contains various endpoints to allow user create task, show tasks ,update task ,show one task and delete a task

It aslo demonstrates an appropriate folder structure 

#  🤖 Tech stack
* Node js
* Express js
* Typescript
* Postgresql
* Prisma ORM
* Render for deployment

# Endpoints

## GET /task
* Returns a list of task created

## POST /task
* Creates a task in the db
  {
  title:"read abook",
  descrption:"read abook on the importance of trees"
  }
  
 ## GET /task/:id
* Returns aspecific task from db

 ## UPDATE /task/:id
* Updates a specific task 

 ## DELETE /task/:id
* Deletes a the specific task with the id

  ## Live server : https://ts-in-express.onrender.com
  

  
