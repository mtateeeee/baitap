const form = {
    email: document.querySelector("#txtname"),
    password: document.querySelector("#txtpass"),
    submit: document.querySelector("#btnlogin"),
};
async function login(){
    
    return fetch('https://dummyjson.com/auth/login', 
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

            username: 'kminchelle',
            password: '0lelplR',
            
        })
    })
        .then(res => res.json())
        
        
    

}

async function returnlogin(){
    let a =await login();
    console.log(a);
    console.log(a["token"]);
    window.localStorage.setItem('123',a["token"]);
    window.location.assign('http://127.0.0.1:5500/Week2/Day8/Profile/index.html');
}
