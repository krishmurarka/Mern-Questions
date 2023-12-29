const fs = require('fs');

let fileLocation = 'file-cleaner-text.txt'

function readFile(){

    return new Promise(resolve =>{
        fs.readFile(fileLocation,'utf-8',(err,data)=>{
            resolve(data);
        })
    })
}

async function removeSpaces(){

    let fileContents = await readFile();

    console.log(fileContents);
    const refactoredFileContents=fileContents.split(' ').filter(content => content !== '').join(' ');

    fs.writeFile(fileLocation,refactoredFileContents,()=>{
        console.log("done")
    });



}

removeSpaces();