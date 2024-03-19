//import json-server library

const jsonServer = require('json-server')

//create server using create function

const mediaPlayerServer = jsonServer.create()

//create path for db.json file

const router=jsonServer.router('db.json')

//create middleware  to conver json into js

const middleware = jsonServer.defaults()


//connect
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//setup port    process env.PORTbecoz if we host it will clash so if use process.env.PORT it will givee a port to store
const port = 4000 || process.env.PORT 


// run the server

mediaPlayerServer.listen(port,()=>{

    console.log('mediaplayer is running succes fully');
})
