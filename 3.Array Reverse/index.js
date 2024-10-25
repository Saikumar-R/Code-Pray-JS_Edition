/*********Question*********/
    //Given an array, write functions to reverse the elements in it.
    //Input : [28,215,655,475,2,78,456]
    //Output : [456,78,2,475,655,215,28]

/*********Solution*********/
    //Using Array.reverse()
        //We can use Array.reverse() Javascript inbuilt function but it can overwrite the original or source array
        //if we don't want to overwrite original or source
            //assign reversed array to a new variable
            //we have to create a shallow copy of the source and can reverse it
        
    //Using loops
        //by using for loop we can crete a new array with reversed elements
        //by using forEach loop we can crete a new array with reversed elements

/*********Code*********/
const array = [28,215,655,475,2,78,456];
// const copy = [...array];
// copy.reverse();
// console.log(copy);
// console.log(array);

//forloop
// const reversedArray = [];
// const arrayRev = (input)=>{
//     for(let i = input.length -1 ; i >=0; i--){
//         reversedArray.push(input[i])
//     }
// }
// arrayRev(array);
// console.log(reversedArray)

//forEach
const reversedArray = [];
const arrayRev = (input)=>{
    input.forEach((elm,idx)=>{
        reversedArray.push(input[input.length - (idx + 1)])
    })
}
arrayRev(array);
console.log(reversedArray)