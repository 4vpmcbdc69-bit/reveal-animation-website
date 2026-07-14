// Intersection Observer for scroll-triggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-delay') || 0;
            setTimeout(() => {
                entry.target.classList.remove('hidden');
                entry.target.classList.add('show');
            }, delay);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with .hidden class
document.addEventListener('DOMContentLoaded', function() {
    const hiddenElements = document.querySelectorAll('.hidden');
    
    hiddenElements.forEach((element, index) => {
        if (element.classList.contains('product-card') || element.classList.contains('pricing-card')) {
            element.setAttribute('data-delay', index * 100);
        }
        observer.observe(element);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Shopping Cart
let cart = [];

function orderProduct(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    alert('✅ ' + productName + ' added to cart!');
}

function updateCart() {
    let cartHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        cartHTML += `<div class="cart-item">
            <span>${item.name} - $${item.price}</span>
            <button onclick="removeFromCart(${index})" style="background: #ff6b6b; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">Remove</button>
        </div>`;
        total += item.price;
    });
    
    document.getElementById('cartItems').innerHTML = cartHTML || '<p style="color: #999;">Your cart is empty</p>';
    document.getElementById('totalPrice').textContent = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function whatsappOrder() {
    if (cart.length === 0) {
        alert('❌ Please add items to your cart first!');
        return;
    }
    
    let message = '🛍️ *ORDER REQUEST*\n\n';
    let total = 0;
    
    cart.forEach(item => {
        message += `• ${item.name} - $${item.price}\n`;
        total += item.price;
    });
    
    message += `\n*Total: $${total}*\n\nPlease confirm this order. Thank you! 🙏`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '1234567890'; // Replace with your WhatsApp number (without +)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
}

function emailOrder() {
    if (cart.length === 0) {
        alert('❌ Please add items to your cart first!');
        return;
    }
    
    let message = 'ORDER REQUEST\n\n';
    let total = 0;
    
    cart.forEach(item => {
        message += `• ${item.name} - $${item.price}\n`;
        total += item.price;
    });
    
    message += `\nTotal: $${total}\n\nPlease confirm this order. Thank you!`;
    
    const encodedMessage = encodeURIComponent(message);
    const email = 'your-email@example.com'; // Replace with your email
    window.open(`mailto:${email}?subject=New%20Order&body=${encodedMessage}`, '_blank');
}

function phoneOrder() {
    if (cart.length === 0) {
        alert('❌ Please add items to your cart first!');
        return;
    }
    
    let orderDetails = 'I would like to order: ';
    cart.forEach(item => {
        orderDetails += `${item.name} ($${item.price}), `;
    });
    
    const phoneNumber = '1234567890'; // Replace with your phone number
    window.location.href = `tel:${phoneNumber}`;
}

window.addEventListener('load', function() {
    console.log('🛍️ Shop Website Loaded Successfully!');
    updateCart();
});