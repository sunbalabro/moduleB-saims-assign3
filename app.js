// Task No 1

//-------------------------------------------------------------------------------------------------

//We have an array of cities. Assign each city in different individual variable. hint ['LA', 'new york', 'karachi','islamabad']

// let arr = ['LA', 'new york', 'karachi','islamabad'];
// let [city1,city2,city3,city4] = arr

//-------------------------------------------------------------------------------------------------

// Task No 2

//--------------------------------------------------------------------------------------------------


//We have a student object. Assign each property in different and individual variable in JS {name:'Marry',age:20,rollNo:2}

// let studentInfo = {name:'Marry',age:20,rollNo:2}
// let {name:studentName,age:studentAge,rollNo:StudentRollNo} = studentInfo

//--------------------------------------------------------------------------------------------------

// Task No 3

//--------------------------------------------------------------------------------------------------


//A function is taking 5 arguments and You have to pass it through an array.
// let arr = [1,2,3,4,5]

// let arr = [1,2,3,4,5]

// const returnArr = (num1,num2,num3,num4,num5) =>{
//    return [num1,num2,num3,num4,num5]
// }

// console.log(returnArr(arr[0],arr[1],arr[2],arr[3],arr[4]))

//----------------------------------------------------------------------------------------------------

// Task No 4

//-----------------------------------------------------------------------------------------------------


//Given an array of firstname and an array of last name. First check both array size is equal or not, if equal then make third new array which has first last name concat value
//let firstNames = ['maryam', 'hira', 'faiza', 'aisha']
//let lastNames = ['khan', 'ayub', 'aziz', 'yasin']
//['maryam khan', 'hira ayub', 'faiza aziz', 'aisha yasin']

// let firstNames = ['maryam', 'hira', 'faiza', 'aisha']
// let lastNames = ['khan', 'ayub', 'aziz', 'yasin']

// if(firstNames.length == lastNames.length){
//     for(var i = 0; i < firstNames.length ; i++){
//      const fullName =   [firstNames[i].concat(lastNames[i])]
        
//     }
// }

//------------------------------------------------------------------------------------------------------

// Task No 5

//-------------------------------------------------------------------------------------------------------

//Create an arrow function that takes array as an input and make each element double and then return an array 

// let arr = [2,4,6,8];
// const returnDoubleValue = (num1,num2,num3,num4) =>{
//     return [Math.pow(num1,2), Math.pow(num2,2), Math.pow(num3,2), Math.pow(num4,2)]
// }
// console.log(returnDoubleValue(arr[0],arr[1],arr[2],arr[3]))

//--------------------------------------------------------------------------------------------------------

// Task No 6

//Create an arrow function that takes a number and return square of a number

// let userNum = 2;
// let sum = (num) =>{
//       return Math.pow(num,2)
// }
// console.log(sum(userNum))

//---------------------------------------------------------------------------------------------------------

// Task No 7

//----------------------------------------------------------------------------------------------------------

/*question: `
var authenticated=true;
var allowed = authenticated ? (alert('you r allowed')) : (alert('you are not allowed))
 which alert will run
*/

// First alert will run 

//------------------------------------------------------------------------------------------------------------

// Task No 8

//------------------------------------------------------------------------------------------------------------

/*
question: ` What is the value of canDrive
        var age = 12;
        var canDrive = age > 18 ? 'yes' : 'no';
        `,
        answers: ['12', '18', 'yes', 'no'],
        which is correct answer
        */

    // Value of  canDrive  will be 'no'
   
//---------------------------------------------------------------------------------------------------------------

// Task No 9

//---------------------------------------------------------------------------------------------------------------

/*
question: `const dog='snickers'
        logdog(dog);
        function logdog(dog){
            console.log(dog)
        }
         function go(){
             const dog='sunny';
             logdog(dog)
         }`,
        answers: ['snickers sunny','sunny snickers','snickers snickers','sunny sunny'] */
        
// Answer will be 'snikers' 

//---------------------------------------------------------------------------------------------------------------


// Task No 10

//--------------------------------------------------------------------------------------------------------------

// let text = `He's often called "Johnny"`;
// console.log(text)// write the answer here

// Answer is He's often called "Johnny"

//--------------------------------------------------------------------------------------------------------------------

// Task No 11

//---------------------------------------------------------------------------------------------------------------
/*function welcomeMsg(name = "Everyone") {
    let msg = "Welcome " + name
    console.log(msg)
}
// welcomeMsg("Faiza")
// welcomeMsg()

I have called funtion twice , share the answer what is printed each time

*/

// On first call of welcomeMsg('Faiza') function it will render Welcome Faiza 
// but on the second call welcomeMsg() function it will call Welcome Everyone
 
//---------------------------------------------------------------------------------------------------------------------

// Task No 12

//------------------------------------------------------------------------------------------------------------------

//make a promise that resolves after 5 sec. Use setTimeOut for resolve.

// let promise = new Promise((resolve, reject) => {
//     const a = "Jawan Pakistan";
//     if (a == 'Jawan Pakistan') {
//         resolve()
//     } else {
//         reject()
//     }
// })

// setTimeout(() => {

//     promise.
//         then(function () {
//             console.log('Promise is resolve');
//         }).
//         catch(function () {
//             console.log('Promise is rejected');
//         });
// }, 5000);