function setTimeoutPromisified(n){

  return new Promise(cb=>setTimeout(()=>cb(n),n))

}

function callback(n){
  console.log(`Using then Called after ${n} seconds`)
}

let p = setTimeoutPromisified(5000).then(callback); 

async function performTask(n){
  console.log("waiting for ")
  await setTimeoutPromisified(n)
  console.log(`Using Async Waitied for ${n} seconds`)


}

performTask(5000)
