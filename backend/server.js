import express, { json, urlencoded } from "express"
import cors from "cors"
import route from "./routes/route.js"
import { connectDB } from "./config/config.js"

const app = express()
const PORT = 5000

app.use(json())
app.use(urlencoded({extended:true}))

app.use(cors())

connectDB()

app.use("/", route)



app.listen(PORT, ()=>{
    console.log("bg is running")
})