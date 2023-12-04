const express = require("express");
const { connection } = require("./controller/db");
const { userRoutes } = require("./routes/userRouter");
var cors = require('cors')


const app = express();
app.use(express.json());
app.use(cors());

app.use("/contacts", userRoutes);



app.listen(8080, async()=> {
    try {
        await connection;
        console.log("server is running on 8080")

    } catch (err) {
        console.log(err)
    }
})