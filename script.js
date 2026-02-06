let cartItems = [];
let total = 0;

function addToCart(itemName, price) {
  cartItems.push(itemName);
  total = total + price;

  document.getElementById("cart").innerHTML = cartItems.join(", ");
  document.getElementById("total").innerHTML = "Total: $" + total;
}

function clearCart() {
  cartItems = [];
  total = 0;

  document.getElementById("cart").innerHTML = "Cart is empty";
  document.getElementById("total").innerHTML = "Total: $0";
}
