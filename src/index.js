const express =require('express')
const bodyPareser = require('body-parser')
const { PORT } = require('./config/serverConfig')


const setUpServer = async () =>{
    const app=express()
    app.use(bodyPareser.json())
    app.use(bodyPareser.urlencoded({extended: true}))

    app.listen(PORT,async ()=>{
        console.log(`Started at PORT ${PORT}`)


    })
}

setUpServer()