const fs = require('fs');
const path = require('path');
const filepath = 'Sample.txt';

fs.writeFileSync(filepath,'Saloni Kharat');

fs.readFile(filepath,'utf-8',(err,item)=>
{
        console.log(item); 
})

fs.appendFile(filepath, " To read and append on this file" ,(err)=>
{
    console.log("Appended Successfully");
})

fs.rename(filepath,'Saloni.txt',(err)=>
{
    console.log("renamed")
})