// Function to dynamically change shoe name, description, and price
function changeShoe() {
    document.getElementById("shoe-name").textContent = "Adidas Ultraboost";
    document.getElementById("shoe-desc").textContent = "Boost your runs with Adidas Ultraboost.";
    document.getElementById("shoe-price").textContent = "$140";
}

// Function to toggle the sale price color
function toggleSale() {
    let priceElement = document.getElementById("shoe-price");
    if (priceElement.style.color === "red") {
        priceElement.style.color = "green";
    } else {
        priceElement.style.color = "red";
    }
}

// Function to add an item to the cart
function addToCart() {
    let cart = document.getElementById("cart-items");
    let newItem = document.createElement("li");
    newItem.textContent = document.getElementById("shoe-name").textContent;
    cart.appendChild(newItem);
}

// Function to clear the cart
function clearCart() {
    document.getElementById("cart-items").innerHTML = "";
}