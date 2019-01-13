var fs = require('fs');
var array_de = fs.readFileSync('messages_de.1.xml').toString()
var mapping = fs.readFileSync('mapping.txt', 'utf-8').toString().split("\n");

var mapper = mapping.map(item => item && item.split(" ***** "))
console.log(mapper)
mapper.forEach(it => {
    var k = it[0]
    var val = it[1];
    if (k && k !== '' && val.length > 4 && k.length > 4) {
        try {
            var re = new RegExp(`">${k}<`,"g");
        array_de = array_de.replace(re, `">${val}<`); 
        } catch (e) {
            console.log(it)
        }
        
    }
})
//console.log(array_de)
fs.writeFileSync("test.xml", array_de, 'utf-8')