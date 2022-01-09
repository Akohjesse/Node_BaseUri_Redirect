const express =  require("express");
const app = express();
const port = process.env.PORT || 2000;
const path = require('path')

app.use(express.static('src'));


app.get('/', (req,res ) =>{
    res.sendFile(path.resolve(__dirname + '/src/metadata.json'));
})

app.listen(port, ()=>{
    console.log('Server started on port ' + port)
})