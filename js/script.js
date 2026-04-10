let cart = [];

function addToCart(item) {
    cart.push(item);
    alert(item + " added to cart!");
}

document.getElementById("cartBtn").addEventListener("click", () => {
    alert("Cart Items: " + cart.join(", "));
});