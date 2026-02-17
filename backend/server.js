import express, { urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import connectDB from "./utils/db.js"
dotenv.config({})
const app = express()

const PORT = process.env.PORT || 3000;

// connected to database..!!
connectDB()

// Middlewares 
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
}
app.use(cors(corsOptions))


app.get("/", (req, res) => {
    res.send("Server is running 🚀")
})

app.listen(PORT, () => {

    console.log(`📡 Server listen at PORT ${PORT}`);

})