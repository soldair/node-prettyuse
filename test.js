var mem = require('./index')
, test = require('tape')


test("can gets the mems",function(t){
  var res = mem.size(10000);
  t.equals('9.8 kb',res.toLowerCase(),'res should be expected value');
  t.ok(mem().indexOf(' MB') > -1,'make sure mem use reports we are using some mb');
  t.end();
})


