import express from "express"
import cors from "cors"

const app = express()

app.use(cors({
    origin:[
        "http://localhost:5173",
        "http://localhost:3000",
        "http://3.238.180.195:5173"
        // add the production url
    ],
    credentials:true
}))
app.use(express.json())

app.get("/api/message" ,(req,res)=>{
    res.json({message:"hello from server"})
})  

const PORT = 5000

app.listen(PORT, "0.0.0.0", () => {
  console.log(`server started at http://0.0.0.0:${PORT}`);
});

