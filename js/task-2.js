function makeArray(firstArray, secondArray, maxLength) {
    const newArray = firstArray.concat(secondArray);
    // console.log(newArray); 
    // console.log(newArray.length);
    // console.log(maxLength);
    
    if (newArray.length > maxLength) {
        // indMaxLength = newArray.indexOf(maxLength);   
        // console.log(indMaxLength);
        
        return newArray[maxLength];
    }
    else { return newArray; }
}

//console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 5));
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
//console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []


