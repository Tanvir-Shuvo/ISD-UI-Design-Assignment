let quantity = 1;
let price = 250;

function increase() {
  quantity++;
  update();
}

function decrease() {
  if (quantity > 1) {
    quantity--;
    update();
  }
}

function update() {
  document.getElementById("quantity").innerText = quantity;
  document.getElementById("subtotal").innerText = quantity * price;
  document.getElementById("total").innerText = quantity * price + 50;
}
