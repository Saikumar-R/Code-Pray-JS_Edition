/*********Question*********/
    // Sort the give array in Ascending and Decending order
    //Input : [28,215,655,475,2,78,456]
    //Output : [2,28,78,215,456,475,655] /*Ascending Order*/
    //Output : [655,475,456,215,78,28,2] /*Decending Order*/

/*********Solution*********/
//We can sort an array using Array.sort() followed by a callback

/*********Code*********/
const ascendingOrder = (inpArr)=>{
    inpArr.sort((a,b)=>a-b);
    console.log(inpArr);
}

const decendingOrder = (inpArr)=>{
    inpArr.sort((a,b)=>b-a);
    console.log(inpArr);
}
ascendingOrder([28,215,655,475,2,78,456]);
decendingOrder([28,215,655,475,2,78,456]);