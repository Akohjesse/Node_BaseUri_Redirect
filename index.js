const express =  require("express");
const app = express();
const port = process.env.PORT || 2000;
const path = require('path');
const fs = require('fs')

app.use(express.static('src'));


app.get('/*', async (req,res ) =>{
    let file  = {
        image: "https://warriormammoth.mypinata.cloud/ipfs/QmSWAskx3AT5DnqkKk2fBFDF8mxk6gMNL31uiHXmZdkiw1",
        description: "Warrior mammoth nft collection inspired by the tale of the warrior tammoth",
        tokenId: req.url.substring(1),
        name: `Mammoth #${req.url.substring(1)}`
    }
    file = JSON.stringify(file);
    fs.writeFile('src/metadata.json', file, err => {
       err ? err : res.sendFile(path.resolve(__dirname + "/src/metadata.json"))
    })
    
})

app.listen(port, ()=>{
    console.log('Server started on port ' + port)
})