
// Initialize cart array from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to render cart items
function renderCart() {
    const cartContainer = document.querySelector('.container.CartItemsMainContainerInCartPAge');
    const cartItemsContainer = cartContainer.querySelector('.row.cart-item');
    const cartEmptyMessage = document.querySelector('.cartEmpty_heading');
    const continueShoppingButton = document.querySelector('.btn_containerIncartPAge');
    const estimatedTotalElement = document.querySelector('.totalEstCardPrice');
    const shippingMessage1 = document.getElementById('lineBar_1stMsg');
    const shippingMessage2 = document.getElementById('lineBar_2ndtMsg');
    const shippingMessage3 = document.getElementById('lineBar_3rdMsg');
    const progressBar = document.getElementById('progressBar');
    const cartHeader = document.querySelector('.row.cart-header');
    const headingRow = document.querySelector('.row.heading-row');
    const totalCardRow = document.querySelector('.totalCardRow');

    // Clear current cart items
    cartItemsContainer.innerHTML = '';

    let estimatedTotal = 0;

    if (cart.length === 0) {
        cartEmptyMessage.style.display = 'block';
        continueShoppingButton.style.display = 'block';
        cartHeader.style.display = 'none';
        headingRow.style.display = 'none';
        totalCardRow.style.display = 'none';
    } else {
        cartEmptyMessage.style.display = 'none';
        continueShoppingButton.style.display = 'none';
        cartHeader.style.display = 'block';
        headingRow.style.display = 'flex';
        totalCardRow.style.display = 'block';

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('row', 'cart-item', 'border-bottom', 'border-top', 'g-0', 'pt-4', 'pb-4');
            cartItem.innerHTML = `
                <div class="col-6 d-flex">
                    <img src="${item.pic}" alt="Product Image" style=" border-radius: 15%;" />
                    <div class="ms-5 inSmallScreensTitleAndOrice">
                        <p class="m-0"><strong class="ProductTitleInCart" style="font-size: 15px;">${item.title}</strong></p>
                        <p class="ProductPrice">Rs.${item.price}</p>
                    </div>
                </div>
                <div class="col-4 pill_buttonAndDelICon" style="width: 32% !important;">
                    <div class="quantity-controls" style="min-width: 32% !important;">
                        <div class="pill-button">
                            <button class="btn_" onclick="updateQuantity(${index}, -1)" style="margin-bottom:15px;">_</button>
                            <span>${item.quantity}</span>
                            <button class="btn_" onclick="updateQuantity(${index}, 1)">+</button>
                        </div>
                    </div>
                    <div class="delete-icon ms-3" style="width: 5% !important;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false" class="icon icon-remove" onclick="removeFromCart(${index})">
                            <path d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z" fill="currentColor"></path>
                            <path d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
                <div class="col-2 total___" style="width: 18%;">
                    <p class="ProductTotalPrice" style="margin-bottom: 0px;">Rs.${item.price * item.quantity}</p>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
            estimatedTotal += item.price * item.quantity;
        });
    }

    estimatedTotalElement.innerText = `Rs.${estimatedTotal} PKR`;

    // Shipping messages and progress bar
    if (estimatedTotal > 2500) {
        shippingMessage1.style.display = 'none';
        shippingMessage2.style.display = 'none';
        shippingMessage3.style.display = 'block';
        progressBar.style.width = '100%';
    } else {
        const remaining = 2500 - estimatedTotal;
        shippingMessage1.style.display = 'none';
        shippingMessage2.style.display = 'block';
        shippingMessage3.style.display = 'none';
        shippingMessage2.innerText = `🚚 You’re only Rs.${remaining} away from free shipping!`;
        progressBar.style.width = `${(estimatedTotal / 2500) * 100}%`;
    }

    updateCartIconCounter();
}

// Function to add item to cart
function addToCart(title, pic, price) {
    const existingItem = cart.find(item => item.title === title);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ title, pic, price, quantity: 1 });
    }
    updateLocalStorage();
    renderCart();
}

// Function to update item quantity in cart
function updateQuantity(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateLocalStorage();
    renderCart();
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateLocalStorage();
    renderCart();
}

// Function to update cart in localStorage
function updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartIconCounter();
}

// Function to update the cart icon counter
function updateCartIconCounter() {
    const cartIconCounter = document.getElementById('cart-counter');
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartIconCounter.innerText = cartItemCount;
    cartIconCounter.style.display = cartItemCount > 0 ? 'inline' : 'none';
    localStorage.setItem('cartItemCount', cartItemCount);
}

// JavaScript code for handling add to cart functionality with notification
document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCounter = document.getElementById('counter');
    const cartIconCounter = document.getElementById('cart-counter');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            const card = this.closest('.card');
            const title = card.querySelector('.card-title').innerText;
            const image = card.querySelector('.card-image-container img').src;
            const price = parseFloat(card.querySelector('.card-price').innerText.replace('Rs.', '').replace(',', ''));
            addToCart(title, image, price);

            // Update the cart counter in both places
            let cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
            cartCounter.innerText = cartItemCount;
            cartIconCounter.innerText = cartItemCount;
            cartIconCounter.style.display = cartItemCount > 0 ? 'inline' : 'none';

            // Save the cart item count to local storage
            localStorage.setItem('cartItemCount', cartItemCount);
        });
    });

    // Render the cart when the page is loaded
    renderCart();
});


