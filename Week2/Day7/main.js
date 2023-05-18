console.log("Hello world!");

function getSum(a = 5, b = 10) {
    console.log("Tổng: " + (a + b));
}

function tich(a, b) {

    return console.log("Tích: " + (a * b));
}
// let a = tich(1, 2);
// let i = prompt("Hãy nhập i:")
// {
//     if (i % 2 == 0) {
//         console.log("i là số chẵn");
//     }
//     else {
//         console.log("i là số lẻ");        
//     }
// }
// let name1 = prompt("Hãy nhập tên:");
// let age = prompt("Hãy nhập tuoi:");
// document.write("123");
// console.log("Tôi tên là " + name1 + " "+age + " tuổi"  ); 

// let diem = Number(prompt("Hãy nhập điểm"));
// switch (true) {
//     case (diem >2):
//         console.log("Gioi");
//         break;
//     default:
//         break;

// }

// let i = Number(prompt("Hãy nhập i:"));
// for(let y =0; y<=i;y++)
// {
//     console.log(" "+y);
// }


// let i = Number(prompt("Hãy nhập i:"));
// let S=0;
// for(let y =1; y<=i;y++)
// {
//     S=S+y;
    
// }
// console.log (S);

// for (let i=1;i<=10;i++)
// {
//     console.log("9 * "+i+" = "+9*i);
// }
//  document.getElementsById("#introduce").style.color ="red";
//  document.querySelector("#introduce").style.color ="red";

// const students = [ "Vỹ", "Khương", "Quỳnh Anh", "Nhất Anh", "Tiến Anh", "Đức Anh"];
// console.log(students.length);
// console.log(students.indexOf("Vỹ")); 
// console.log(students.shift());
////////////////////////pop();
// console.log(students)
// console.log(students.join('-'));
// console.log(students.splice(1,1));
// console.log(students.splice(students.indexOf("Quỳnh Anh"),1));
// console.log(students)

// const students1 = ["Sơn Anh", "Phước"];
// const students2 = students.concat(students1);
//////////////////////////////push();

//map :
//const numbers = [4, 9, 16, 25];
//document.getElementById("demo").innerHTML = numbers.map(Math.sqrt);-thao tac với các ptu trong mảng

// console.log(students2)
 
let i=Math.random();
console.log(i);
console.log(Math.round(i*100));

function TaoSoNgauNhien(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var a = TaoSoNgauNhien(1, 2); 
var b = TaoSoNgauNhien(3, 8); 
var c = TaoSoNgauNhien(2, 5); 

console.log (a);






