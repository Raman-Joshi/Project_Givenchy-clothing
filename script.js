document.addEventListener("DOMContentLoaded", () => {
    const cartButton = document.getElementById("cart-button");
    const cartModal = document.getElementById("cart-modal");
    const closeCartButton = document.getElementById("close-cart");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.getElementById("cart-count");
  
    let cart = [];
  
    document.querySelectorAll(".add-to-cart").forEach(button => {
      button.addEventListener("click", () => {
        const productId = button.getAttribute("data-id");
        const productName = button.getAttribute("data-name");
        const productPrice = parseInt(button.getAttribute("data-price"));
  
        const existingProduct = cart.find(item => item.id === productId);
  
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
        }
  
        updateCart();
      });
    });
  
    cartButton.addEventListener("click", () => {
      cartModal.classList.remove("hidden");
    });
  
    closeCartButton.addEventListener("click", () => {
      cartModal.classList.add("hidden");
    });
  
    function updateCart() {
      cartItems.innerHTML = "";
      let total = 0;
      cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price} x ${item.quantity}`;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
      });
      cartTotal.textContent = total;
      cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }
  });
  