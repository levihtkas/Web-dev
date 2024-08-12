const fs = require('fs')

let contents = new Promise((resolve) => 
fs.readFile('a.txt','utf8',function(err,data){{
  if(err){
    console.log(err);
  }else{
    resolve(data)
  }
}})
)

async function trimmer(data){
  return data.replace(/\s+/g, ' ');

}

console.log(contents.then(data =>trimmer(data)).then(trimmed_data=>console.log(trimmed_data)))
