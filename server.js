const express = require("express")
const ejs = require("ejs");
const path = require("path");

const app = express()
app.use(express.json())
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const productRoutes = require("./routes/productRoutes")
const userRoutes = require("./routes/userRoutes")
const favoriteRoutes = require("./routes/favoriteRoutes")
const basketsRoutes = require("./routes/basketsRoutes")

app.get("/", (req, res)=>{
    res.render("home")
})

app.use("/products", productRoutes)
app.use("/users", userRoutes)
app.use("/favorites", favoriteRoutes)



const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`APP is listening on ${PORT}`);
})


