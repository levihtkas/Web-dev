let i=0;
function counter(){
  setTimeout(counter,1000);
  i++;
  console.log(i);

}
counter();
