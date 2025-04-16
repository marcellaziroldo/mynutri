
import express from "express";
import cors from "cors";
import axios from "axios";
import recipeRouter from "./backend/routes/recipes.js";

const app = express();
const PORT = process.env.PORT || 8080;




app.use(express.json());

app.use(cors());

/*app.get("/", async(req, res) => {
    res.send("This is working")
}),*/
app.use('/', recipeRouter);

app.listen(PORT, () => {
    console.log("server is running on port 8080");
});