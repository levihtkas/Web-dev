const fs = require('fs')


function readTheFile(resolve) {
  fs.readFile('a.txt', 'utf-8',function(err,data){
    if(err){
      console.log(err);
    }else{
      resolve(data)
    }
  });
  
}


function read(){
  return new Promise(readTheFile);
}

function callback(contents){
  // let contents = fs.readFile('a.txt','utf-8');
  console.log(contents)
}

read().then(callback)
