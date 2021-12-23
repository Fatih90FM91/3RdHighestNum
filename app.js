// Firday: 3rd Highest Number in Array
// Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. Your algorithm should do only one iteration of the array (just one for/while loop).

// Example:

// Using the array [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31], the correct answer is : 11



// .

// .


let array =  [5, 2, 8, 20, -2, 0, 11, 7, 3, 10, 31];

let newArray=[];//we need to create new array for finding the largest number..

function thirdLargestNum(){

    newArray[0]= array[0];//the biggest
    newArray[1]=array[1];//second biggest
    newArray[2]=array[2];//third biggest


    for (let i = 0; i< array.length; i++) {
        
        if (array[i]>newArray[0]) {

            newArray[0]=array[i];
            
        }
        
    }

    
    for (let i = 0; i< array.length; i++) {
        
        if (array[i]>newArray[1] && array[i]< newArray[0]) {

            newArray[1] =array[i];
            
        }
        
    }

    for (let i = 0; i< array.length; i++) {
        
        if (array[i]>newArray[2] && array[i] < newArray[1] ) {

            newArray[2] =array[i];
            
        }
        
    }
    console.log( "3rd Highest Number in Array ==>> " + newArray[2]);
}

    let ouput = thirdLargestNum();
  



// ===================================================================================

