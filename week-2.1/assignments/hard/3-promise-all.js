function wait1(t) {
  return new Promise(resolve=>setTimeout(resolve,t))
}

function wait2(t) {
  return new Promise(resolve=>setTimeout(resolve,t))
}

function wait3(t) {
  return new Promise(resolve=>setTimeout(resolve,t))
}

function calculateTime(t1, t2, t3) {
  let start = Date.now();
  console.log(start)
  Promise.all([wait1(t1),wait2(t2),wait3(t3)]).then(resolve => {console.log((Date.now()-start)/1000) ;
    resolve});
}
calculateTime(1000,1000,1000)
