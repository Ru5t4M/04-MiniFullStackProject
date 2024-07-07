const router = require("express").Router()
const fs = require("fs");

const readData = ()=>{
    return JSON.parse(fs.readFileSync("./data/favorites.json"));
}
const writeData = (data)=>{
    fs.writeFileSync("./data/favorites.json", JSON.stringify(data));
}


router.get("/", (req, res)=>{
    const products = readData();
    res.render("favorites", {products})
})

router.delete("/:id", (req, res)=>{
    const favorites = readData();
    const index = favorites.findIndex(p => p.id == req.params.id)
    if(index !== -1){
        const deletedFavorite = favorites.splice(index, 1)
        writeData(favorites)
        res.json(deletedFavorite);
    }
    else{
        res.status(404).json({message: "No favorite"})
    }
})
module.exports = router;