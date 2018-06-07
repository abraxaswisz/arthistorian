export function randomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

export function mixArray(array) {
  let newArray = [];
  let ble;
  while (array.length > 0) {
    ble = array.splice(randomNumber(array), 1);
    newArray.push(ble.toString());
  }
  newArray.map(key => {
    return array.push(key);
  });
  console.log(array);
  return array;
}
