const  mongoose=require("mongoose")
const express=require("express")
const bodyParser=require("body-parser")

const passport = require("passport");
const users = require("./routes/api/users");

const cors=require("cors")
const app = express()

const AssureRoute=require("./routes/assureRoute.js")
const SalariésRoutes=require("./routes/SalariésRoutes")
const ProfileRoutes=require("./routes/ProfileRoute")
const ChargeFixeRoute=require("./routes/ChargeFixeRoute")

app.use(cors())
// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json()); //parser les données au format json
app.use("/",AssureRoute)
app.use("/Salaries",SalariésRoutes)
app.use("/",ProfileRoutes)
app.use("/",ChargeFixeRoute)

//DB Config
const db = require("./config/keys").mongoURI;




// Connect to MongoDB
mongoose.connect(
       db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
  const port = process.env.PORT || 4343; // process.env.port is Heroku's port if you choose to deploy the app there
  app.listen(port, () => console.log(`Server up and running on port ${port} !`));


  // Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);


// // Se connecter à la base de données
//  mongoose.connect(process.env.MONGO_URL)
//  .then( result=>app.listen(process.env.PORT,()=>console.log(`Server is running with success on port: ${process.env.PORT}`))
//  )   //listen à 2 parametres:(PORT,fonction)
//  .catch(error=> console.log(error))
    
  
 