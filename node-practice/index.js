var cors = require('cors')
const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');



//app.use(cors());
app.use(cors());


app.get('/', (req, res) => {

    var param = req.params.dictionary;
    res.send(param);
  })
  
app.post('/sendinfo',cors(),(req,res, $http) => {
   
    var url = "data.json";


    // Connect DB to get the info 


    fs.readFile(url, (err, data) => {
        if (err) throw err;
        let student = JSON.parse(data);
        console.log(student);




        res.send(student);
    });

    
    
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });