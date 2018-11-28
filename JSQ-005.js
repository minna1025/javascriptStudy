var strings = ['Hello world', 'javascript', 'study', 'test'];

function checkEvenString(str){
// function stringLength(str){ 가 좀더 적절
  if( str.length >= 5 ){
    return true;
  }else{
    return false;
  }
}

var evenStrings = strings.filter(checkEvenString);

console.log(evenStrings);
