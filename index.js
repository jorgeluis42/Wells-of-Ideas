function well(array){
let counter = 0
for(let i=0; i < array.length; i++){
  const array1 = array[i];
  for(let j=0; j < array1.length; j++){
   const Strings = array1[j]
   if(typeof(Strings) === 'string')
   if(Strings.toLowerCase() === 'good')
   counter ++
  }
}
if( counter > 2){
return 'I smell a series!'
}
else if ( counter >= 1){
return 'Publish!'
} else {
return 'Fail!'
}
}
