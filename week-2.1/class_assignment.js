const fs = require('fs');

function readTxtFile(path){
  // let org = ""
   return new Promise((resolve)=>fs.readFile("a.txt","utf-8",function(err,data){
    if(err){
      console.log(err);
    }else{
      console.log(data)
      resolve(data);
    }
  }));
}

function trimSpaces(data){
  console.log("the data "+data.trim())
  return data.trim();
}

function writeFile(data){
  fs.writeFile('output.txt', data, 'utf8', function(err) {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('File has been written.');
    }
  });
}

async function solve(){
  data = await readTxtFile();
  trimmed_data= await trimSpaces(data)
  await writeFile(trimmed_data);
}

solve()
