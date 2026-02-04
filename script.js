// Simple Cart Functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price, image) {
    cart.push({ name: productName, price: parseFloat(price), image });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} added to cart!`);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-items');
    if (cartContainer) {
        cartContainer.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            total += item.price;
            cartContainer.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <span>${item.name} - $${item.price}</span>
                </div>
            `;
        });
        document.getElementById('cart-total').textContent = `Total: $${total.toFixed(2)}`;
    }
}

// Smooth scroll to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Load cart on page load
document.addEventListener('DOMContentLoaded', updateCartDisplay);