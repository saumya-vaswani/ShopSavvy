let main=document.getElementById("main");
let cdata=JSON.parse(localStorage.getItem('cdata'));
console.log(cdata);


displaydata = (data) => {
    data.forEach(element => {
        let div = document.createElement("div");
        div.innerHTML = `<img src=${element.image}>
       <p>${element.title}</p>
       <strong>Price: ${element.price}</strong>
       <div>
       <h5>Quantity
       <input type="number" min="1" value="1"></h5>
       <button class="wishbtn" id='${element.id}w'>Add to Wishlist</button>
       <button class='cartbtn' id='${element.id}c'>Remove from Cart</button>
       </div>`
        main.appendChild(div);
        console.log(element);

        let cartbtns = div.querySelector('.cartbtn');
        cartbtns.addEventListener('click', () => {
            cdata = cdata.filter(ele => ele.id != parseInt(cartbtns.id));
            localStorage.setItem('cdata', JSON.stringify(cdata));
            cartbtns.parentElement.parentElement.style.display='none';
        })
    })
}
if(cdata==""){
    main.innerHTML=`<h1>Cart is Empty.</h1>`
}
displaydata(cdata);



