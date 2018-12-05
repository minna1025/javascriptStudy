function repeat(num, operation){
  if(num < 0){
    return false;
  }else{
    console.log(num)
    return repeat(num-1, operation);
  }
}