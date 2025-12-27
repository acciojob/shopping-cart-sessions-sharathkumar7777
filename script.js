const products = [
  { id: 1, name: "Product1", price: 10 },
  { id: 2, name: "Product2", price: 20 },
  { id: 3, name: "Product3", price: 30 },
  { id: 4, name: "Product4", price: 40 },
  { id: 5, name: "Product5", price: 50 }
];

const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearCartBtn = document.getElementById("clear-cart-btn");

// Load cart from sessionStorage
let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

// Render Products
function renderProducts() {
  products.forEach(product => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price} `;

    const btn = document.createElement("button");
    btn.textContent = "Add to Cart";
    btn.addEventListener("click", () => addToCart(product));

    li.appendChild(btn);
    productList.appendChild(li);
  });
}

// Render Cart
function renderCart() {
  cartList.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}

// Add to Cart
function addToCart(product) {
  cart.push(product);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Clear Cart
clearCartBtn.addEventListener("click", () => {
  cart = [];
  sessionStorage.removeItem("cart");
  renderCart();
});

// Initial Load
renderProducts();
renderCart();
