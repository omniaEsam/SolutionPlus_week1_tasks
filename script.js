// task one
// const arr1 = [1, 2, 3];
// const arr2 = [3, 4, 5];
// const arr3 = [5, 6, 7];

// const arr =[...arr1 , ...arr2 , ...arr3];
// console.log(arr);

// for(let i =0 ; i< arr.length ; i++){
    
//         if(arr[i] === arr[i+1]){
//             arr.splice(arr[i] , 1)
//         }
    
// }
// console.log(arr);
// ===========================================================
// task Two
// let sum = 0
// function average (...numbers){
//  numbers.map(num => sum+= num)
//  return sum/numbers.length
// }
// console.log(average(2,4,6,8));
// ==========================================================
// task three
// function factorial (num){
//    if(num === 1 || num === 0){
//     return 1
//    }
//    else{
//     return num * factorial(num-1)
//    }
// }
// console.log(factorial(4));
// ==========================================================
// task4
const arr1 = [1,2,3,[4,5,6]]
// shallow copy
const arr2 = [...arr1]
// deep copy
// const arr2 = JSON.parse(JSON.stringify(arr1))
arr2.push(12)
arr2[3].push(10)
console.log(arr1);
console.log(arr2);

const obj1 = {
    id:1 ,
    name: "omnia",
    address: {
       country: "Egypt" ,
       city: "damitte"
    }
}
// shallow copy
const obj2 = Object.assign({}, obj1);
// deep copy
// const obj2 = JSON.parse(JSON.stringify(obj1))

obj1.name = "Essam"
obj1.address.city ="portsaid"
console.log(obj1);
console.log(obj2);
// ==========================================
// const arr1 = [1,2,3]
// shallow copy
// const arr2 = [...arr1]
// deep copy
// const arr2 = JSON.parse(JSON.stringify(arr1))
// const arr2 = Object.assign(arr1)
// arr2.push(12)
// console.log(arr1);
// console.log(arr2);