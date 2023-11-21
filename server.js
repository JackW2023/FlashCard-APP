const express =require("express")
const session= require("express-session")
const exphbs= require("express-handlebars")
// const sequelize= require("./config/connection")
const helmet = require('helmet')
const htmlroutes = require('./controller/htmlroutes')


const app= express()
app.use(helmet())

const PORT = process.env.PORT || 8080

// const SequelizeStore = require('connect-session-sequelize')(session.Store)

// const sess={
//     secret: "Super secret secret",
//     cookie:{},
//     resave:false,
//     saveUninitialized:true,
//     // store: new SequelizeStore({
//     //     db: sequelize
//     // })
// }

// app.use(session(sess))

const hbs=exphbs.create({})
app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))

app.use(htmlroutes)

app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}! ...Click on the link: http://localhost:${PORT}`)
    // sequelize.sync()
})