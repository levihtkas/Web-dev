function sleep(ms){
  return new Promise(
    sakthi => {
      const start = Date.now();
      while(Date.now()-start<ms){

      }
      sakthi();
    }
  )
}
function cb(){
  console.log("This is it")
}
sleep(10000).then(cb)
