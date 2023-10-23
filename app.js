const express = require('express')
const app = express()
const port = 3000
var signUpAsset = require('./module')
var subpage = require('./test')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
let big=['A','B','C','D','E','F','G','H','I','J','K','L','N','M','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let smo=['a','b','c','d','e','f','g','h','i','j','k','l','n','m','o','p','r','q','s','t','u','v','w','x','y','z']

app.use(express.static(__dirname + "/exex"));
app.use(express.static('files'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.get('/css/main.css', function (req, res) {
  res.sendFile(__dirname + "/css/main.css")
});

app.post('/login', function (req, res) {
  Object.assign(signUpAsset, req.body)
  console.log(signUpAsset)
  res.send(subpage(signUpAsset.id));
})
app.get('/sub.css', (req,res)=>{
  res.sendFile(__dirname+ "/sub.css")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})