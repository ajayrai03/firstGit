// var a;
// a=10;
// console.log(a);
// console.log(typeof a);

// a="hello";
// console.log(a);
// console.log(typeof a);

// a=true;
// console.log(a);
// console.log(typeof a);

// a=10.01;
// console.log(a);
// console.log(typeof a);

// a=null;
// console.log(a);
// console.log(typeof a);
// var str='ajay';
// console.log(str);
// console.log(typeof str);
// // backtick
// var num=5000;
// console.log(`half of ${num} is ${num/2}`);
// var h='hey';
// console.log(h);
//  var a=50;
// console.log(a);
// var a=100;
// console.log(a);
// let a=70;
// console.log(a);
// a=90;
// console.log(a);
// const a=45;
// console.log(a);
// const b=75;
// console.log(b);
// var n=10;
// for(var i=0;i<n;i++)
// {
//     if(i%2==0)
//     {
//         console.log(i);
//     }
// }
// var n=10;
// for(var i=0;i<n;i++)
// {   let j=20;
//     if(i%2==0)
//     {
//         console.log(i);
//     }
// }
// console.log(i);
// console.log(j);
// let arr2d=[[1,2,3], [4,5,6], [7,8,9]];
// console.table(arr2d);
// console.log(arr2d[1][2]);
// console.log(arr2d.length);
// let arr1d=["bmw", "tata", 1,4,0,0,3];
// console.log(arr1d.length);
// var a="ajay rai";
// console.log(a);
// a="dom";
// console.log(a);
// let a="ajay rai";
//  a="dom";
// console.log(a);
// "objects"
// let captainAmerica = {
//     firstName: "Steve",
//     lastName: "Rogers",
//     friends: ["Bucky", "Tony Stark", "Brue Banner"],
//     age: 102,
//     isAvenger: true,
//     address: {
//         state: "Manhattan",
//         city: "New York",
//         country: "USA"
//     },
//     sayHi: function () {
//         console.log(`Hello my name is ${this.firstName}`);
//     }
// };

// console.log(captainAmerica);
// console.log(captainAmerica.friends);
// console.log(captainAmerica.friends[0]);
// captainAmerica.sayHi();
// let person = {
//     //key : value 
//     name: "Abhishek",
//     age: 28,
//     phone: 9999999999,
//     gender: "Male",
//     height: "170cm"
// };
//console.log(`hey ${person.name} welcome`);
let address = {
    block : 'B 101',
    sector : 44,
    city : "noida",
    district : "gautambuddhnagar",
    state : "uttarpradesh",
    person:{0 : "ajay", 1:"rai"},
    domocile :{
        proof:"bihar"
    },
    sayhi:function()
    {
        console.log(`hey ${this.block} your`);
    }

};
//console.log(address.block);
// for(let key in address)
// {
//     console.log(key);   
//     console.log(address[key]);
// }
// address.sayhi();
//console.log(address.person[1]);
console.log(address.domocile);