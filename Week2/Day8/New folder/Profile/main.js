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

// document.getElementsByClassName("settingtxt1"). = function () {
//     document.getElementsByClassName("setting").style.display = 'none';
// };

const element = document.getElementById("hidebtn");
element.addEventListener("click", myFunction1);

function myFunction1(){
    document.getElementById("hide").style.display = 'none';
    document.getElementsByClassName("edit").style="width:100%"
}

function myFunction2(){
    document.getElementById("hide").style.display = 'flex';
}

const firstnameEle = document.getElementById('firstname');
const lastnameEle = document.getElementById('lastname');
const addressEle = document.getElementById('address');
const emailEle = document.getElementById('email');
const phoneEle = document.getElementById('phone');

const btnRegister = document.getElementById('btn-register');
const inputEles = document.querySelectorAll('.input-row');

btnRegister.addEventListener('click', function () {
    Array.from(inputEles).map((ele) =>
        ele.classList.remove('success', 'error')
    );
    let isValid = checkValidate();

    
});

function checkValidate() {
    let firstnameValue = firstnameEle.value;
    let lastnameValue = lastnameEle.value;
    let addressValue = addressEle.value;
    let emailValue = emailEle.value;
    let phoneValue = phoneEle.value;

    let isCheck = true;

    if (firstnameValue == '') {
        setError(firstnameEle, 'Tên không được để trống');
        isCheck = false;
    } else {
        setSuccess(firstnameEle);
    }

    if (lastnameValue == '') {
        setError(lastnameEle, 'Tên không được để trống');
        isCheck = false;
    } else {
        setSuccess(lastnameEle);
    }

    if (addressValue == '') {
        setError(addressEle, 'Địa chỉ không được để trống');
        isCheck = false;
    } else {
        setSuccess(addressEle);
    }

    if (emailValue == '') {
        setError(emailEle, 'Email không được để trống');
        isCheck = false;
    } else if (!isEmail(emailValue)) {
        setError(emailEle, 'Email không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(emailEle);
    }

    if (phoneValue == '') {
        setError(phoneEle, 'Số điện thoại không được để trống');
        isCheck = false;
    } 
    else {
        setSuccess(phoneEle);
    }

    return isCheck;
}

function setSuccess(ele) {

    ele.parentNode.classList.add('success');
}

function setError(ele, message) {
    let parentEle = ele.parentNode;
    parentEle.classList.add('error');
    parentEle.querySelector('small').innerText = message;
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

// function isPhone(number) {
//     return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
// }
