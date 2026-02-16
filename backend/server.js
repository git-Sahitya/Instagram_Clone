import express, { urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

// Middlewares 
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
}
app.use(cors(corsOptions))


app.get("/",(req,res)=>{
    res.send("Server is running 🚀")
})

const PORT = 8000

app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);

})