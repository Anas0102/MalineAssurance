const  mongoose=require("mongoose")
const express=require("express")
const cors=require("cors")
const app = express()
const ContratRoute=require("./routes/ContratRoute")
const AssureRoute=require("./routes/assureRoute.js")


app.use(cors())
app.use(express.json()) //parser les données au format json
app.use("/",ContratRoute)
app.use("/",AssureRoute)

require("dotenv").config()

// Se connecter à la base de données
 mongoose.connect(process.env.MONGO_URL)
 .then( result=>app.listen(process.env.PORT,()=>console.log(`Server is running with success on port: ${process.env.PORT}`))
 )   //listen à 2 parametres:(PORT,fonction)
 .catch(error=> console.log(error))
    
  
 