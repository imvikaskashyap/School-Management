const express = require("express")
const app = express()


const bodyParser = require("body-parser")
const cors = require("cors")

const serverConfig = require("./configs/serverConfig")
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(cors())
app.use('/schoolImages', express.static('schoolImages'));


const db = require('./configs/dbConfig')
const errorHandler = require("./middlewares/errorHandler")
db.dbConnect()

app.get("/",(req,res)=>{
    res.send("HIII")
})



require('./routes/schoolRoute')(app)
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running up and down by PORT: ${port}`);
})