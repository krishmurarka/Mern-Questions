const fs = require('fs');

fs.appendFile('4-write-to-file.md',"\nHello writing into the file from code....",()=>{
    console.log("writing")
})