var fs = require('fs');
var array_de = fs.readFileSync('messages_de_2.xml').toString().split("\n");
var array_vi = fs.readFileSync('messages_vi.xml').toString().split("\n");
console.log(array_vi)
var res = []
for(let i=0; i < array_de.length;i++) {
    res.push([array_de[i].trim().toString(), array_vi[i] ? array_vi[i].trim() : array_vi[i]])
}
console.log(res)
var file = fs.createWriteStream('mapping.txt');
file.on('error', function(err) { /* error handling */ });
res.forEach(function(v) { file.write(v.join(' ***** ') + '\n'); });
file.end();
