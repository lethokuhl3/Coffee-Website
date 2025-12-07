const product = [
  {
    id: 1,
    image: "images/espresso00.jpg",
    name: "Espresso",
    price: "R16.00(double)",
    description: "Espresso: the heart of coffee!",
  },
  {
    id: 2,
    image: "images/lungo.jpg",
    name: "Lungo",
    price: "R20.00",
    description: "Creamy perfection in every cup!",
  },
  {
    id: 3,
    image: "images/cppanoshj.jpg",
    name: "Cappuccino",
    price: "R20.00",
    description: "Creamy perfection in every cup!",
  },
  {
    id: 4,
    image: "images/cartado.jpg",
    name: "Cartado",
    price: "R20.00",
    description: "Creamy perfection in every cup!",
  },
  {
    id: 5,
    image: "images/amerricao.jpg",
    name: "Americano",
    price: "R20.00",
    description: "Creamy perfection in every cup!",
  },
];

const product2 = [
  {
    id: 6,
    image: "images/drip coffee.jpg",
    name: "Drip Coffee",
    price: "R16.00",
    description: "Awaken your senses with every drop!",
  },
  {
    id: 7,
    image: "images/cold brew.jpg",
    name: "Cold Brew",
    price: "R15.00",
    description: "Smooth, rich flavour-no heat required!",
  },
  {
    id: 8,
    image: "images/iced coffee.jpg",
    name: "Iced Coffee",
    price: "R17.00",
    description: "Sip into summer with every glass!",
  },
  {
    id: 9,
    image: "images/nitro coffee.jpg",
    name: "Nitro Coffee",
    price: "R17.00",
    description: "Cold brew, nitro infused!",
  },
  {
    id: 10,
    image: "images/tr.jpg",
    name: "Turkish Coffee",
    price: "R20.00",
    description: "Experience the rich heritage of Turkish coffee!",
  },
];

const product3 = [
  {
    id: 11,
    image: "images/Affogato.jpg",
    name: "Affogato",
    price: "R16.00",
    description: "Espresso meets ice cream—pure magic!",
  },
  {
    id: 12,
    image: "images/nitro cold brew.jpg",
    name: "Nitro Cold Brew",
    price: "R15.00",
    description: "Chill out with a smooth, nitrogen-infused brew!",
  },
  {
    id: 13,
    image: "images/dalgona.jpg",
    name: "Dalgona Coffee",
    price: "R17.00",
    description: "Elevate your coffee game with a whipped twist!",
  },
  {
    id: 14,
    image: "images/macchiato.jpg",
    name: "Macchiato",
    price: "R17.00",
    description: "Taste the balance of strength and creaminess.",
  },
  {
    id: 15,
    image: "images/Ristretto.jpg",
    name: "Ristretto",
    price: "R13.00",
    description: "Savor the strength of a ristretto.",
  },
];

const product4 = [
  {
    id: 16,
    image: "images/beer.jpg",
    name: "Beer",
    price: "R16.00",
    description: "Crafted with passion, enjoyed with friends.",
  },
  {
    id: 17,
    image: "images/wine.jpg",
    name: "Red Wine",
    price: "R15.00",
    description: "Elevate your evenings with a glass of red.",
  },
  {
    id: 18,
    image: "images/herbal tea.jpg",
    name: "Herbal Tea",
    price: "R17.00",
    description: "Sip your way to tranquility with our herbal teas!",
  },
  {
    id: 19,
    image: "images/green juice.jpg",
    name: "Green Juice",
    price: "R18.00",
    description: "Nourish your body, energize your life!",
  },
  {
    id: 20,
    image: "images/mocktail.jpg",
    name: "MockTail",
    price: "R13.00",
    description: "Raise your glass to guilt-free indulgence!",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  getItems();
  getItems2();
  getItems3();
  getItems4();

  const buttonElements = document.querySelectorAll(".button-add");
  buttonElements.forEach((button) => {
    button.addEventListener("click", function () {
      const productId = button.getAttribute("data-id");
      addToCart(productId);
    });
  });
});

export function getItems() {
  let products = product;
  let productHTML = "";
  products.forEach(function (product) {
    productHTML += `
    <div class="product-card">
    <img src="${product.image}">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <p>${product.description}</p>
    <button class="button-add" data-id="${product.id}">Add to Cart</button>
    </div>
    `;
  });

  const productContainer = document.querySelector(".js-products");
  if (productContainer) {
    productContainer.innerHTML = productHTML;
  } else {
    console.error("Element with class 'js-products' not found");
  }
}

export function getItems2() {
  let products = product2;
  let product2HTML = "";
  products.forEach(function (product2) {
    product2HTML += `
      <div class="product-card">
       <img src="${product2.image}">
       <h3>${product2.name}</h3>
       <p>${product2.price}</p>
       <p>${product2.description}</p>
       <button class="button-add" data-id="${product2.id}">Add to Cart</button>
   </div>`;
  });

  const productContainer = document.querySelector(".js-products2");
  if (productContainer) {
    productContainer.innerHTML = product2HTML;
  } else {
    console.error("Element with class 'js-products2' not found");
  }
}

export function getItems3() {
  let products = product3;
  let product3HTML = "";
  products.forEach(function (product3) {
    product3HTML += `
      <div class="product-card">
       <img src="${product3.image}">
       <h3>${product3.name}</h3>
       <p>${product3.price}</p>
       <p>${product3.description}</p>
       <button class="button-add" data-id="${product3.id}">Add to Cart</button>
   </div>`;
  });

  const productContainer = document.querySelector(".js-products3");
  if (productContainer) {
    productContainer.innerHTML = product3HTML;
  } else {
    console.error("Element with class 'js-products3' not found");
  }
}

export function getItems4() {
  let products = product4;
  let product4HTML = "";
  products.forEach(function (product4) {
    product4HTML += `
      <div class="product-card">
       <img src="${product4.image}">
       <h3>${product4.name}</h3>
       <p>${product4.price}</p>
       <p>${product4.description}</p>
       <button class="button-add" data-id="${product4.id}">Add to Cart</button>
   </div>`;
  });

  const productContainer = document.querySelector(".js-products4");
  if (productContainer) {
    productContainer.innerHTML = product4HTML;
  } else {
    console.error("Element with class 'js-products4' not found");
  }
}

localStorage.clear();

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartCount = cart.length;

export function updateCartIcon() {
  const cartIcon = document.querySelector(".js-cart-quantity");
  if (cartIcon) {
    cartIcon.textContent = cartCount;
  }
}

export function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId) {
  const allProducts = [...product, ...product2, ...product3, ...product4];
  const productToAdd = allProducts.find(
    (item) => item.id === parseInt(productId)
  );

  if (productToAdd) {
    const existingproduct = cart.find((item) => item.id === productToAdd.id);

    if (existingproduct) {
      existingproduct.quantity += 1;
    } else {
      productToAdd.quantity = 1;
      cart.push(productToAdd);
    }

    cartCount += 1;
    saveCart();
    updateCartIcon();
  }
}

updateCartIcon();
