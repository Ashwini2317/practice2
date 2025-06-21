const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const app = express()
app.use(express.json())//body parser
app.use(express.static("dist"))
app.use(cors({ origin: "https://practice2-p6t4.onrender.com" }))
app.use("/api/employee", require("./routes/employee.routes"))
mongoose.connect(import.meta.env.VITE_URL)//database la connect karaychi command
mongoose.connection.once("open", () => {
    console.log("db connected");
    app.listen(process.env.PORT, console.log("server running"));// server open caraychi command nodemon takych
})
