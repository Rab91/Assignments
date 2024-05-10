
var array = [5,6,7,4,5,6,9,3,2,7];
var duplicates, filteredArray;

duplicates= function(arr) {
    filteredArray = arr.sort(); 
    console.log(filteredArray);

    let result = [];
    for (let i = 0; i < filteredArray.length; i++) {
      if (filteredArray[i] == filteredArray[i+1]) {
        result.push(filteredArray[i]);
      }
    }
    return result;
  }
  console.log(`Duplicates of ${array} are ${duplicates(array)}`);
  document.write(`<i>Duplicates of </i> ${array} <i>are</i> <b>${duplicates(array)}</b>`);
