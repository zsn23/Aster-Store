
function showImageLarge(imgId_) {
    // Hide all large images
    let largeImages_ = document.querySelectorAll('.ProductLarge_img');
    largeImages_.forEach(image_ => {
      image_.style.display = 'none';
    });
  
    // Show the selected large image
    let selectedImage_ = document.getElementById(imgId_);
    if (selectedImage_) {
      selectedImage_.style.display = 'block';
    }
  }

function showImage(colorClass) {
    // Hide all large images
    let largeImages = document.querySelectorAll('.ProductLarge_img');
    largeImages.forEach(image => {
      image.style.display = 'none';
    });
  
    // Hide all small images
    let smallImages = document.querySelectorAll('.ProductSmall_img');
    smallImages.forEach(image => {
      image.style.display = 'none';
    });
  
    // Show the selected large images
    let selectedLargeImages = document.querySelectorAll(`.${colorClass}_large`);
    selectedLargeImages.forEach(image => {
      image.style.display = 'block';
    });
  
    // Show the corresponding small images
    let selectedSmallImages = document.querySelectorAll(`.${colorClass}_small`);
    selectedSmallImages.forEach(image => {
      image.style.display = 'block';
      let ferozylarge2=document.getElementById("Ferozy_img2");
      ferozylarge2.style.display  = 'none';
    });
  }


let fstMsg = document.getElementById("lineBar_1stMsg");
let SndMsg = document.getElementById("lineBar_2ndtMsg");
let TrdMsg = document.getElementById("lineBar_3rdMsg");
let progress_Bar = document.getElementById("progressBar");


function diplayLinebarMesseges(){
 
//  display 2nd msg
  if(!fstMsg.style.display)
  {
    SndMsg.style.display='block';
    fstMsg.style.display='none';
    progress_Bar.style.width="50%";
  }

  // display 3rd msg
  else if(SndMsg.style.display)
  {
    TrdMsg.style.display='block';
    fstMsg.style.display='none';
    SndMsg.style.display='none';
    progress_Bar.style.width="100%";
  }
  
}


document.addEventListener("DOMContentLoaded", function() {
  const incrementButton = document.getElementById('increment');
  const decrementButton = document.getElementById('decrement');
  const quantityDisplay = document.getElementById('counter_in_Main_product_Page');
  const cartQuantity = document.getElementById('cartQuantity');
  const addToCartButton = document.getElementById('add_to_cart_button');
  const cartNotification = document.getElementById('Cart__Notification_');
  const productImg = document.getElementById('product_img');
  const productTitle = document.querySelector('.notification_card_title_');
  const cartCounter = document.getElementById('counter');
  const cartIconCounter = document.getElementById('cart-counter');
  
  // Initialize quantities and cart item count
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let quantity = 1; // Initialize quantity to 1

  // Update the cart counter elements with the retrieved cart item count
  let cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  if (cartCounter) cartCounter.innerText = cartItemCount;
  if (cartIconCounter) {
    cartIconCounter.innerText = cartItemCount;
    cartIconCounter.style.display = cartItemCount > 0 ? 'inline' : 'none';
  }
  if (cartQuantity) cartQuantity.innerText = quantity;

  // Function to change quantity with boundaries
  function changeCounter(change) {
    quantity += change;
    if (quantity < 1) quantity = 1; // Minimum quantity is 1
    if (quantity > 6) quantity = 6; // Maximum quantity is 6
    quantityDisplay.innerText = quantity;
    cartQuantity.innerText = quantity;
  }

  // Attach event listeners to increment and decrement buttons
  incrementButton.addEventListener('click', function() {
    changeCounter(1);
  });

  decrementButton.addEventListener('click', function() {
    changeCounter(-1);
  });

  // Function to handle adding to cart
  addToCartButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    // Retrieve product details
    const card = this.closest('.Main_cardBody');
    if (!card) {
      console.error('Card element not found');
      return;
    }

    const title = card.querySelector('.product__title').innerText;
    const image = card.querySelector('.ProductLarge_img').src;
    const price = parseFloat(card.querySelector('.product-price').innerText.replace('Rs.', '').replace(',', ''));
    const quantity = parseInt(quantityDisplay.innerText);

    // Add product to cart
    const existingItem = cart.find(item => item.title === title && item.pic === image);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ title, pic: image, price, quantity });
    }

    // Update localStorage with new cart data
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart counters
    cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
    if (cartCounter) cartCounter.innerText = cartItemCount;
    if (cartIconCounter) {
      cartIconCounter.innerText = cartItemCount;
      cartIconCounter.style.display = cartItemCount > 0 ? 'inline' : 'none';
    }
    if (cartQuantity) cartQuantity.innerText = quantity;

    // Update cart notification with product title and image
    productImg.src = image;
    productTitle.innerText = title;

    // Show the cart notification
    cartNotification.style.display = 'block';
    console.log('Cart notification displayed');
  });
});

// Function to close the cart notification
function close_notification() {
  const cartNotification = document.getElementById('Cart__Notification_');
  cartNotification.style.display = 'none';
  console.log('Cart notification closed');
}







