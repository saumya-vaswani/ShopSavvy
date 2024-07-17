let main=document.getElementById("main");
let wdata=JSON.parse(localStorage.getItem('wdata'));
console.log(wdata);


displaydata = (data) => {
    data.forEach(element => {
        let div = document.createElement("div");
        div.innerHTML = `<img src=${element.image}>
       <p>${element.title}</p>
       <strong>Price: ${element.price}</strong>
       <div>
       <button class="wishbtn" id='${element.id}w'>Remove from Wishlist</button>
       <button class='cartbtn' id='${element.id}c'>Add to Cart</button>
       </div>`
        main.appendChild(div);
        console.log(element);

        let wishbtns = div.querySelector('.wishbtn');
        wishbtns.addEventListener('click', () => {
            wdata = wdata.filter(ele => ele.id != parseInt(wishbtns.id));
            localStorage.setItem('wdata', JSON.stringify(wdata));
            wdata.parentElement.parentElement.style.display='none';
        })
    })
}

displaydata(wdata);

if(wdata==""){
    main.innerHTML=`<h1>Wishlist is Empty.</h1>`
}

