/*********Question*********/
    // Given an array, 
        //1.Remove duplicate elements in the input array
        //2.write functions to find the minimum and maximum elements in it.
    //Input : [28,215,655,475,2,78,456,2,4,215,28]
    //Output : 
        //Unique Elements : [28,215,655,475,2,78,456,4]
        //minimum element = 2, 
        //maximum element = 655


/*********Solution*********/
    //Set remove duplicates in Array
        //We can remove duplicate elements in an aarray an retrun new array using Set Method.
    //using Math and spread
        //we can find min and max numbers using Math.min and Math.max    
/*********Code*********/

const outArr = (inpArr)=>{
    const unqArr = [...new Set(inpArr)];
    console.log(unqArr);

    const minNum = Math.min(...inpArr);
    console.log(`Min Num: ${minNum}`);

    const maxNum = Math.max(...inpArr);
    console.log(`Max Num: ${maxNum}`);
}
outArr([28,215,655,475,2,78,456,2,4,215,28]);