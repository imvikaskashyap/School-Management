const express = require("express")
const app = express()

const bodyParser = require("body-parser")
const cors = require("cors")

const serverConfig = require("./configs/serverConfig")

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

app.listen(serverConfig.PORT, () => {
    console.log(`Server is running up and down by PORT: ${serverConfig.PORT}`);
})