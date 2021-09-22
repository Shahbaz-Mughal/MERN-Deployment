const express = require("express");
const app = express();
const port = 8000
const cors = require("cors"); // helps FE and BE communicate

// app.get("/api", (res,req)=>{
//     res.json({message:"hey issa meee"})
// })

app.use(cors());

require("./server/config/mongoose.config");
// establishes connection with DB

app.use(express.json(), express.urlencoded({extended:true}));
// functionality for POST requests, data that client may send over

require("./server/routes/pet.routes")(app);
// routes file is a function

app.listen(port, () => console.log(`running on ${port} is a new way I like to be!!!`))