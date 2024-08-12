const fs = require('fs')

fs.writeFile('output-1.txt',"afsfsgvdr","utf8",function(err){
  if(err){
    console.log(err);
  }else{
    console.log("data is written")
  }

})
