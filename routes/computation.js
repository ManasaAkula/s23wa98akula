var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
if(Object.keys(req.query).length == 0){
  var x = Math.random();
  res.render('computation',{
  param1:`math.log2() applied to ${x} is ${Math.log2(x)}`,
  param2:`math.cosh() applied to ${x} is ${Math.cosh(x)}`,
  param3:`math.floor() applied to ${x} is ${Math.floor(x)}`
});
}

else{
  for(let y in req.query){
    res.render('computation',{
    param1:`math.log2() applied to ${req.query[y]} is ${Math.log2(req.query[y])}`,
    param2:`math.cosh() applied to ${req.query[y]} is ${Math.cosh(req.query[y])}`,
    param3:`math.floor() applied to ${req.query[y]} is ${Math.floor(req.query[y])}`})
  }

}
 
});

module.exports = router;