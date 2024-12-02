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

  const buttonElement = document.querySelectorAll(".button-add")
  buttonElement.forEach(button => {
    button.addEventListener("click", function() {
      const productId = button.getAttribute("data-id");
      console.log(`button clicked for product id:${productId}`);
      });
      });
