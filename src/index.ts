import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";

const app = express();
const port = 3001;

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/ecommerce")
  .then(() => console.log("Mongo Connected!"))
  .catch((err) => console.log("Failed To Connect!" , err));


  app.use('/user' , userRoute);

  app.get("/", (req, res) => {
    res.send("Server is up and running now");
  });

  app.listen(port , () => {
    console.log("Server is Running at : " + port)
});
