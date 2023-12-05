const str = 'name';
const obj = {
  name: 'Andrey',
  age: 41
}

function propertyCheck(str, obj) {
  if (str in obj){
    return true;
  } else {
      return false;
  }
    
}

console.log(propertyCheck(str, obj));
