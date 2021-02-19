const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const getData = require('./utils/getData.js');

const app = express()
const port = process.env.port || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  })


  app.use("/test", function (req, res, next)
  {
      res.send([{'id' : '2'}])
  })
  


app.use("/listFiles", async function (req, res, next)
{
  try {
      const data = await getData.readDirectory() ;
       res.send(data);
      } catch (error) {
        res.send([{'error' : error.toString()}]);
    }
})


app.use("/cms", express.static(path.join("cms")));
app.use("/", express.static(path.join("ui")));

app.get('*',(req,res) =>{
  res.sendFile(path.resolve('ui/index.html'));
});


app.listen(port, () => {
  console.log(`listening at ${port}`)
})