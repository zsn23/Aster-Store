// JavaScript code for handling add to cart functionality
document.addEventListener("DOMContentLoaded", function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartNotification = document.getElementById('Cart__Notification_');
  const productImg = document.getElementById('product_img');
  const productTitle = document.querySelector('.notification_card_title_');
  const cartCounter = document.getElementById('counter');
  const cartIconCounter = document.getElementById('cart-counter');

  // Retrieve the cart count from local storage or set it to 0 if not present
  let cartItemCount = localStorage.getItem('cartItemCount') ? parseInt(localStorage.getItem('cartItemCount')) : 0;

  // Update the cart counter elements with the retrieved cart item count
  if (cartCounter) cartCounter.innerText = cartItemCount;
  if (cartIconCounter) {
    cartIconCounter.innerText = cartItemCount;
    cartIconCounter.style.display = cartItemCount > 0 ? 'inline' : 'none';
  }

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();

      const card = this.closest('.card');
      const title = card.querySelector('.card-title').innerText;
      const image = card.querySelector('.card-image-container img').src;

      // Update cart notification with product title and image
      productImg.src = image;
      productTitle.innerText = title;

      // Increment the cart item count and update the counters
      cartItemCount++;
      if (cartCounter) cartCounter.innerText = cartItemCount;
      if (cartIconCounter) {
        cartIconCounter.innerText = cartItemCount;
        cartIconCounter.style.display = 'inline';
      }

      // Show the cart notification
      cartNotification.style.display = 'block';
    });
  });
});

// Function to close the cart notification
function close_notification() {
  const cartNotification = document.getElementById('Cart__Notification_');
  cartNotification.style.display = 'none';
}




