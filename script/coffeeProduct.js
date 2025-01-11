const product = [{
  "id": 1,
  "image":"images/espresso00.jpg",
  "name": "Espresso",
  "price":"$15.99(double) / $12.99(single)",
  "description":"Espresso: the heart of coffee!",
  }, {
    "id": 2,
    "image": "images/lungo.jpg",
    "name": "Lungo",
    "price":"$19.99",
    "description":"Creamy perfection in every cup!",
  },{
    "id": 3,
    "image":"images/cppanoshj.jpg" ,
    "name": "Cappuccino",
    "price":"$19.99",
    "description":"Creamy perfection in every cup!",
  },{
    "id": 4,
    "image":"images/cartado.jpg",
    "name": "Cartado",
    "price":"$19.99",
    "description":"Creamy perfection in every cup!",
  },{
    "id": 5,
    "image":"images/amerricao.jpg",
    "name": "Americcano",
    "price":"$19.99",
    "description":"Creamy perfection in every cup!",
  }]

  const product2 = [{
    "id": 6,
    "image": "images/drip coffee.jpg",
    "name": "Drip Coffee",
    "price": "$15.99",
    "description": "Awaken your senses with every drop!"
  },{
    "id": 7,
    "image": "images/cold brew.jpg",
    "name": "Cold Brew",
    "price": "$14.99",
    "description": "Smooth, rich flavour-no heat required!"
  },{
    "id": 8,
    "image": "images/iced coffee.jpg",
    "name": "Iced Coffee",
    "price": "$16.99",
    "description": "Sip into summer with every glass!"
  },{
    "id": 9,
    "image": "images/nitro coffee.jpg",
    "name": "Nitro Coffee",
    "price": "$16.99",
    "description": "Cold brew, nitro infused!"
  },{
    "id": 10,
    "image": "images/tr.jpg",
    "name" : "Turkish Coffee",
    "price" : "$19.99",
    "description" : "Experience the rich heritage of Turkish coffee!"
  }]

  const product3 = [{
    "id": 11,
    "image": "images/Affogato.jpg",
    "name": "Affogato",
    "price": "$15.99",
    "description": "Espresso meets ice cream—pure magic!"
  },{
    "id": 12,
    "image": "images/nitro cold brew.jpg",
    "name": "Nitro Cold Brew",
    "price": "$14.99",
    "description": "Chill out with a smooth, nitrogen-infused brew!"
  },{
    "id": 13,
    "image": "images/dalgona.jpg" ,
    "name": "Dalgona Coffee",
    "price": "$16.99",
    "description": "Elevate your coffee game with a whipped twist!"
  },{
    "id": 14,
    "image": "images/macchiato.jpg",
    "name": "Macchiato",
    "price": "$16.99",
    "description": "Taste the balance of strength and creaminess."
  },{
    "id": 15,
    "image": "images/Ristretto.jpg",
    "name" : "Ristretto",
    "price" : "$12.99",
    "description" : "Savor the strength of a ristretto."
  }]

  const product4 = [{
    "id": 16,
    "image" :"images/beer.jpg",
    "name": "Beer",
    "price": "$15.99",
    "description": "Crafted with passion, enjoyed with friends."
  },{
    "id": 17,
    "image": "images/wine.jpg",
    "name": "Red Wine",
    "price": "$14.99",
    "description": "Elevate your evenings with a glass of red."
  },{
    "id": 18,
    "image": "images/herbal tea.jpg" ,
    "name": "Herbal Tea",
    "price": "$16.99",
    "description": "Sip your way to tranquility with our herbal teas!"
  },{
    "id": 19,
    "image": "images/green juice.jpg" ,
    "name": "Green Juice",
    "price": "$17.99",
    "description": "Nourish your body, energize your life!"
  },{
    "id": 20,
    "image": "images/mocktail.jpg" ,
    "name" : "MockTail",
    "price" : "$12.99",
    "description" : "Raise your glass to guilt-free indulgence!"
  }]

 

  function getItems() {
    let products = product;
    let productHTML = "";
    products.forEach(function(product) {

  productHTML += `
    <div class="product-card">
    <img src="${product.image}" alt="Ethiopian Yirgacheffe">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <p>${product.description}</p>
    <button class="button-add" data-id="${product.id}">Add to Cart</button>
    </div>
    `});
    
    document.querySelector(".js-products").innerHTML = productHTML

  }
  getItems();

  function getItems2() {
    let producy = product2;
    let product2HTML = "";
    producy.forEach(function(product2) {

      product2HTML += `
      <div class="product-card">
       <img src="${product2.image}" alt="French Roast">
       <h3>${product2.name}</h3>
       <p>${product2.price}</p>
       <p>${product2.description}</p>
       <button class="button-add" data-id="${product2.id}">Add to Cart</button>
   </div>`
    })
  
    document.querySelector(".js-products2").innerHTML = product2HTML
  }

  getItems2();


  function getItems3() {
    let producyt = product3;
    let product3HTML = "";
    producyt.forEach(function(product3) {

      product3HTML += `
      <div class="product-card">
       <img src="${product3.image}" alt="French Roast">
       <h3>${product3.name}</h3>
       <p>${product3.price}</p>
       <p>${product3.description}</p>
       <button class="button-add" data-id="${product3.id}">Add to Cart</button>
   </div>`
    })
  
    document.querySelector(".js-products3").innerHTML = product3HTML
  }

  getItems3();

  function getItems4() {
    let producyz = product4;
    let product4HTML = "";
    producyz.forEach(function(product4) {

      product4HTML += `
      <div class="product-card">
       <img src="${product4.image}" alt="French Roast">
       <h3>${product4.name}</h3>
       <p>${product4.price}</p>
       <p>${product4.description}</p>
       <button class="button-add" data-id="${product4.id}">Add to Cart</button>
   </div>`
    });
  
    document.querySelector(".js-products4").innerHTML = product4HTML
  }

  getItems4();

localStorage.removeItem("cart");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartCount = cart.length;

function updateCartIcon() {
  const cartIcon = document.querySelector(".js-cart-quantity");
  if (cartIcon) {
    cartIcon.textContent = cartCount;
  }
}

function addToCart(productId) {
  const allProducts = [...product, ...product2, ...product3, ...product4];
  const productToAdd = allProducts.find((item) => item.id === parseInt(productId));

  if (productToAdd) {
    const existingproduct = cart.find((item) => item.id === productToAdd.id);

    if(existingproduct) {
      existingproduct.quantity += 1;
    }else{
      productToAdd.quantity = 1;
      cart.push(productToAdd);
    }

    cartCount += 1;

    localStorage.setItem('cart', JSON.stringify(cart));

    updateCartIcon();

    console.log(`Added to cart: ${productToAdd.name}`);
  } else {
    console.log(`Product with ID ${productId} not found.`);
  }
}

const buttonElements = document.querySelectorAll(".button-add");
buttonElements.forEach((button) => {
  button.addEventListener("click", function () {
    const productId = button.getAttribute("data-id");
    addToCart(productId);
  });
});

updateCartIcon();
