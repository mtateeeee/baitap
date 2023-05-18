// const person = 
// {
//     firstName : "John",
//     lastName : "Doe",
//     age : 50,
//     eyeColor: "blue"

// };
// console.log(Object.keys(person));
// console.log(Object.values(person));

// let txt ="Lop hoc web cua KITS";
// console.log(txt.length);
// console.log(txt.slice(8,11));
// console.log(txt.replaceAll(" ",","));
// let vitri = txt.search("Lop");
//     if (vitri==-1)
//     console.log("Không xuất hiện");
//     else 
//     console.log(vitri)

// const isDev=text => text.includes('web');

// function isDev1(text){
//     return text.includes('Dev');
// }
// isDev1('dev1');
// isDev1('ABCDevxyz');
// isDev1('FE Dev')

// let i=prompt("Nhập i");
// while (i<2)
// {
//     i=prompt("Nhập lại i");
// }
// let n=0;
// for( let y=2;y<=Math.sqrt(i);y++)
//     if (i%y==0)
//     {

//         n=n+1;
//     }
//     if (n==0){
//         console.log("i là số nguyên tố");
//     }
//     if (n!=0){
//         console.log("i không phải là số nguyên tố");
//     }


// let n=prompt("Nhập n");
// while (n<0)
// {
//     n=prompt("Nhập lại n"); 
// }
// let S=0;
// for (let i=1;i<=n;i++ )
// {
//     S=S+i/n;
// }
// console.log(S);

function validateEmail() {
    var x = document.infor.email.value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < (atposition + 2) || (dotposition + 2) >= x.length) {
        alert("Please enter a valid e-mail address.");
        return false;
    }
}

function myFunction() {
    document.getElementById("myform").reset();
}

function Redirect() {
    window.location = "https://viblo.asia.vn";
}



