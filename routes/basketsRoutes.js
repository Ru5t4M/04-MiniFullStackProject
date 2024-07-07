const router = require("express").Router()
const fs = require("fs");

const readData = ()=>{
    return JSON.parse(fs.readFileSync("./data/baskets.json"));
}
const writeData = (data)=>{
    fs.writeFileSync("./data/baskets.json", JSON.stringify(data));
}

const readFavorites = ()=>{
    return JSON.parse(fs.readFileSync("./data/baskets.json"));
}
const addToFavorite = (data)=>{
    fs.writeFileSync("./data/baskets.json", JSON.stringify(data));
}

router.get("/", (req, res)=>{
    const baskets = readData();
    res.render("baskets", {baskets});
})