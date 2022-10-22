const express = require('express')
const app = express()
const port = 3000
const path = require("path")
let publicPath = path.resolve(__dirname, "public")
app.use(express.static(publicPath))
app.get('/sendJSON/:url', sendJSON)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


  //sends JSONs to be parsed at client side
async function sendJSON(req,res){
    console.log("sendJSON called")
  //get API request from user
    let requestAPI = req.params.url;

    //get JSON result from API
    console.log('Contacting API...');
    const responseAPI = await fetch(url);
    const data = await responseAPI.json();
    const stringifiedData = JSON.stringify(data)

    var parsedData = JSON.parse(stringifiedData);

    //send parsed JSON to client
    res.parsedData;
}


