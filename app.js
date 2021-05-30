const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
                                                                   
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index")
})

app.get('/:name', (req, res) => {
    let name = req.params.name
    res.render("productPage",{imgName: name})
})

app.get("/detail/:productName", (req, res) => {
    let productName = req.params.productName 
    res.render("productDetail", { product: productName });
})

app.get("/system/cart", (req, res) => {
    res.render("cart");
})
app.listen(process.env.PORT || 3000, () => {
  console.log("server started");
});