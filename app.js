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

// var maxIndex = new Array();
// var maxPoints = new Array();
// var scoreByPattern = new Array(93, 17, 56, 91, 98, 33, 9, 38, 55, 78, 29, 81, 60);

// function findLargest3() {
//   maxPoints[0] = 0;
//   maxPoints[1] = 0;
//   maxPoints[2] = 0; 
  
//   for (i = 0; i < scoreByPattern.length; i++) {
//     if (scoreByPattern[i] > maxPoints[0]) {
//       maxPoints[0] = scoreByPattern[i];
//       maxIndex[0] = i;
//     }
//   }

//   for (i = 0; i < scoreByPattern.length; i++) {
//     if (scoreByPattern[i] > maxPoints[1] && scoreByPattern[i] < maxPoints[0]) {
//       maxPoints[1] = scoreByPattern[i];
//       maxIndex[1] = i;
//     }
//   }

//   for (i = 0; i < scoreByPattern.length; i++) {
//     if (scoreByPattern[i] > maxPoints[2] && scoreByPattern[i] < maxPoints[1]) {
//       maxPoints[2] = scoreByPattern[i];
//       maxIndex[2] = i;
//     }
//   }

//   console.log(scoreByPattern + "/******/" + maxPoints[0] + "/" + maxPoints[1] + "/" + maxPoints[2]);
//   //alert(maxIndex);
// }

// findLargest3();