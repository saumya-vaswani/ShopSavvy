let logbtn = document.getElementById("logbtn");
let main = document.getElementById("main");
let cdata = [];
let wdata = [];
let fetchdata = async function () {
    let result = await fetch('https://fakestoreapi.com/products/');
    let data = await result.json();
    console.log(data);
    displaydata(data);
}



fetchdata();
displaydata = (data) => {
    data.forEach(element => {
        let disable = '';
        cdata.forEach(ele => {
            if (ele.id == element.id) {
                disable = 'disabled';
            }
        })
        wdata.forEach(ele => {
            if (ele.id == element.id) {
                disable = 'disabled';
            }
        })
        let div = document.createElement("div");
        div.innerHTML = `<img src=${element.image}>
       <p>${element.title}</p>
       <strong>Price: ${element.price}</strong>
       <div>
       <button class='wishbtn' id='${element.id}w'>Add to Wishlist</button>
       <button class='cartbtn' id='${element.id}c'>Add to Cart</button>
       </div>`
        main.appendChild(div);
        console.log(element);

        let cartbtns = div.querySelector('.cartbtn');
        let wishbtns = div.querySelector('.wishbtn');
        cartbtns.addEventListener('click', () => {
            let product = data.find(ele => ele.id == parseInt(cartbtns.id));
            cdata.push(product);
            localStorage.setItem('cdata', JSON.stringify(cdata));
            console.log(product);
            cartbtns.disabled = true;
        })
        wishbtns.addEventListener('click', () => {
            let product = data.find(ele => ele.id == parseInt(wishbtns.id));
            wdata.push(product);
            localStorage.setItem('wdata', JSON.stringify(wdata));
            console.log(product);
            wishbtns.disabled = true;
        })
    })
}



