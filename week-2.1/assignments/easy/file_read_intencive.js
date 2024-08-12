const fs = require('fs')

let contents = fs.readFile('a.txt','utf-8',function(err,data){
  if(err){
    console.log(err);
  }else{
    console.log("Data is present ?"+data)
    
  }
})
let sum=0
for(let i=0;i<10000000000;i++){

  sum+=i;
}

console.log(sum)
