// ---------- GET PRODUCT FROM URL ----------
const params = new URLSearchParams(window.location.search);

const product = {
  name: params.get("name"),
  price: parseInt(params.get("price")),
  image: params.get("image"),
  quantity: 1
};

// ---------- RENDER ORDER ----------
const orderSummary = document.getElementById("order-summary");
const subtotalEl = document.getElementById("subtotal");
const taxEl = document.getElementById("tax");
const totalEl = document.getElementById("total");

function renderOrder() {
  orderSummary.innerHTML = `
    <div class="order-item">
      <div class="food-image">
        <img src="${product.image}">
      </div>

      <div class="food-info">
        <h4>${product.name}</h4>
      </div>

      <div class="quantity">
        <button onclick="changeQty(-1)">-</button>
        <span>${product.quantity}</span>
        <button onclick="changeQty(1)">+</button>
      </div>

      <div class="item-price">
        ৳${product.price * product.quantity}
      </div>

      <div class="remove">
        <button onclick="removeItem()">Remove</button>
      </div>
    </div>
  `;

  const subtotal = product.price * product.quantity;
  const tax = Math.round(subtotal * 0.05);
  const delivery = 50;

  subtotalEl.innerText = subtotal;
  taxEl.innerText = tax;
  totalEl.innerText = subtotal + tax + delivery;
}

// ---------- ACTIONS ----------
function changeQty(value) {
  if (product.quantity + value < 1) return;
  product.quantity += value;
  renderOrder();
}

function removeItem() {
  orderSummary.innerHTML = "<p>🛒 No items in cart</p>";
  subtotalEl.innerText = 0;
  taxEl.innerText = 0;
  totalEl.innerText = 0;
}

renderOrder();
