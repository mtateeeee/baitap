// // API https://fakestoreapi.com/products 

// async function getAll() {
//     return fetch('https://fakestoreapi.com/products')
//         .then(res => res.json());
// }

// async function fetchData() {
//     const products = await getAll();
//     console.log(products);

//     const productsDiv = document.getElementById("products")
//     for (let item of products) {
//         productsDiv.innerHTML += `
//       <div class="im">
//       <p>${item.id}</p>
//       <h2>${item.title}</h2>
//       </div>
//       `;
//     }
// }

// API https://fakestoreapi.com/products 

async function getAll() {
    return fetch('https://fakestoreapi.com/products')
        .then(res => res.json());
}

async function fetchData() {
    const products = await getAll();
    console.log(products);
    const productsDiv = document.getElementById("fetch");
    for (let item of products) {
        productsDiv.innerHTML += `
    <div class="im">
    <p>${item.id}</p>
    <img src= ${item.image}>
    <h2>${item.title}</h2>
    
    </div>
    `;
    }
}

details()
{
    location.replace('https://developer.mozilla.org/en-US/docs/Web/API/Window/location');
}
