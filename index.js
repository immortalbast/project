const express=require("express")
const app=express()
const port=3000

const urlencodedparser=express.urlencoded({extended:false})

app.listen(port,()=>{
    console.log("Готово!")
})

app.use(express.static("css"))