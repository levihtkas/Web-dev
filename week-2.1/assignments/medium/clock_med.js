let i=1;
let j=30;
let z=5;
setInterval(counter,1000)

function timeCorrection(op){
  if(op/10 <1){
    return "0"+op.toString();
  }
  else{
    return op;
  }
}

function counter(){
  i=i+1;
  let zone = "AM";

  if(i == 60){
    i=0;
    j++;
  }
  if(j==60){
    j=0;
    z++;
  }
  if(z==24){
    z=0;
  }
  if(z>=12){

    zone = "PM";
  }
  let ci = timeCorrection(i);
  let cj = timeCorrection(j);
  let cz = timeCorrection(z);
  console.log(cz+ "::" + cj + "::" + ci +" "+zone)

}
