import { getItems, getItems2, getItems3, getItems4, addToCart, updateCartIcon,saveCart } from "../../script/coffeeProduct.js";

describe("test suite: Products", () => {
  beforeEach(() => {
    localStorage.clear();
    getItems();
    getItems2();
    getItems3();
    getItems4();
    addToCart();
    updateCartIcon();
    saveCart();
  });

  it("should render products correctly for getItems", () => {
    getItems();
    const productCards = document.querySelectorAll(".js-products .product-card");
    expect(productCards.length).toBe(5); 
  });


  it("should render products correctly for getItems2", () => {
    getItems2();
    const productCards = document.querySelectorAll(".js-products2 .product-card");
    expect(productCards.length).toBe(5);
  });


  it("should render products correctly for getItems3", () => {
    getItems3();
    const productCards = document.querySelectorAll(".js-products3 .product-card");
    expect(productCards.length).toBe(5);
  });

  it("should render products correctly for getItems4", () => {
    getItems4();
    const productCards = document.querySelectorAll(".js-products4 .product-card");
    expect(productCards.length).toBe(5); 
  });

  it("should add items to the cart correctly", () => {
    addToCart(1);
    saveCart();
    let cart = JSON.parse(localStorage.getItem("cart"));
    expect(cart.length).toBe(1);
    expect(cart[0].quantity).toBe(3);

    addToCart(1);
    saveCart();
    cart = JSON.parse(localStorage.getItem("cart"));
    expect(cart.length).toBe(1);
    expect(cart[0].quantity).toBe(4);
  });


  it("should update the cart icon correctly", () => {
    addToCart(1);
    updateCartIcon();
    const cartIcon = document.querySelector(".js-cart-quantity");
    expect(cartIcon.textContent).toBe("1");

    addToCart(1);
    updateCartIcon();
    expect(cartIcon.textContent).toBe("2");
  });

  it("should add items to the cart when button is clicked", () => {
    const button = document.querySelector(".js-products .button-add");
    button.click();

    saveCart();
    updateCartIcon();
    let cart = JSON.parse(localStorage.getItem("cart"));
    expect(cart.length).toBe(1);

    button.click();
    saveCart();
    updateCartIcon();
    cart = JSON.parse(localStorage.getItem("cart"));
    expect(cart.length).toBe(1);
  });
});