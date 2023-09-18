const express = require('express');
const cors = require('cors');
// Cross Origin Resource Sharing
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const compression = require("compression");
const userRouter = require('./routers/userRouter');
const orderRouter = require('./routers/orderRouter');
const todoRouter = require("./routers/todoRouter");

const app = express();

app.use(compression());
app.use(cors());
app.use(express.json());
app.use('/user', userRouter);
app.use('/orders', orderRouter);
app.use("/todo", todoRouter);



mongoAtlasUri = process.env.MONGODB_SERVER;
try {
  // Connect to the MongoDB cluster
   mongoose.connect(
    mongoAtlasUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
  );

} catch (e) {
  console.log("could not connect");
}

const port = process.env.PORT || 8000;


app.listen(port, () => {
    console.log(`Listening on port  ${port}...`); 
})






