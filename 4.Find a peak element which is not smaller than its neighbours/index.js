/********* Question: Find a peak element which is not smaller than its neighbours *********/
// Input: array[]= [5, 10, 20, 15] , [10,20,15,2,23,90,67]
// Output: 20
// Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.

/*********Solution*********/

//for the first element in array we dont have any previous element, so the first element should be greaterthan next element.
// for the last element in array we dont have any next element, so the last element should be greaterthan prvs element.
// for other elements we have previous and next elements, so element should be greter than its previous and next element.

/*********Code*********/
const findPeakElm = (inpArray)=>{
    const inpArrayLen = inpArray.length;
    
    for(let i = 0; i<inpArrayLen; i++){
        if(i === 0 && (inpArray[i] > inpArray[i+1])){ // check first element
            console.log(`true cond=1 ${inpArray[i]}`);
        }
        else if(i === (inpArrayLen -1) && (inpArray[i] > inpArray[inpArrayLen - 2])){ // check last elemrt
            console.log(`true cond=2 ${inpArray[i]}`);
        }
        else{ //remaining elements
            if((inpArray[i] > inpArray[i-1]) && (inpArray[i] > inpArray[i+1])){
                console.log(`true cond=3 ${inpArray[i]}`);
            }
        }
    }
}
findPeakElm([10,20,15,2,23,90,67]);