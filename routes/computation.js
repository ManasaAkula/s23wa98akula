var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
if(Object.keys(req.query).length == 0){
  var k = Math.random();
  res.render('computation',{
  param1:`math.log2() applied to ${k} is ${Math.log2(k)}`,
  param2:`math.cosh() applied to ${k} is ${Math.cosh(k)}`,
  param3:`math.floor() applied to ${k} is ${Math.floor(k)}`
});
}

else{
  for(let m in req.query){
    res.render('computation',{
    param1:`math.log2() applied to ${req.query[m]} is ${Math.log2(req.query[m])}`,
    param2:`math.cosh() applied to ${req.query[m]} is ${Math.cosh(req.query[m])}`,
    param3:`math.floor() applied to ${req.query[m]} is ${Math.floor(req.query[m])}`})
  }

}
 
});

module.exports = router;