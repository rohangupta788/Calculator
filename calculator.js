const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get("/",function(req,res){
  res.sendFile(__dirname +"/index.html");
})
app.post("/",function(req,res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  if (req.body.submit === "add"){
  var result = num1 + num2;
}  else if (req.body.submit === "minus"){
  var result = num1 - num2;
}  else if (req.body.submit === "divide"){
  var result = num1 / num2;
}  else if (req.body.submit === "multiply"){
  var result = num1 * num2;
}
  res.send("The calculation of inputs is "+ result);
})

app.get("/bmicalculator", function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
})

app.post("/bmicalculator", function(req,res){
  var w = parseFloat(req.body.wt);
  var h = parseFloat(req.body.ht);
  var bmi = w/(h*h);
  var result =Math.round((bmi + Number.EPSILON) * 100) / 100;       //for value upto 2 decimal places if required
  res.send("Your BMI is "+ result);
})

app.listen(3000,function(){
  console.log("Server is running on port 3000");
});
