module.exports.bf2 = require('./bf2');
module.exports.bf2142 = require('./bf2142');
module.exports.auth = require('./authToken');
var fs = require('fs');
module.exports.bf2142.getPlayer("1908093").then(p => { delete p.getAwards; delete p.getUnlocks; return p; }).then(p => fs.writeFile("out.txt", JSON.stringify(p), console.log));
//console.log(require('./authToken.js').parseToken('bSCZgQN08cGhavVXAhY7CA__'));
