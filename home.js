// home.js

function buyNow(name, price, image) {
  const encodedName = encodeURIComponent(name);
  const encodedImage = encodeURIComponent(image);

  window.location.href =
    `order.html?name=${encodedName}&price=${price}&image=${encodedImage}`;
}
