const  mongoose=require("mongoose")
const express=require("express")
const bodyParser=require("body-parser")

const dotenv=require('dotenv')

dotenv.config()
const cors=require("cors")
const app = express()

const ProfileRoutes=require("./routes/ProfileRoute")
const ChargeFixeRoute=require("./routes/ChargeFixeRoute")
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");


app.use(cors())
// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json()); //parser les données au format json

// routes
app.use("/",ProfileRoutes)
app.use("/",ChargeFixeRoute)
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


// Se connecter à la base de données
 mongoose.connect(process.env.MONGO_URL)
 .then( result=>app.listen(process.env.PORT,()=>console.log(`Server is running with success on port: ${process.env.PORT}`))
 )   //listen à 2 parametres:(PORT,fonction)
 .catch(error=> console.log(error))
    
  
 