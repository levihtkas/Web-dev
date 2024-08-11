const fs =require('fs');

function read(err,data){
  console.log(data);
}

const content = fs.readFile("a.txt","utf-8",read);


const contentB = fs.readFile("b.txt","utf-8",read);

console.log("Done")
