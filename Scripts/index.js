document.addEventListener("DOMContentLoaded", function () {
  const searchIconOutside = document.getElementById("searchIconOutside");
  const searchBar = document.querySelector(".search-bar");
  const closeIcon = document.getElementById("closeIcon");
  const searchInput = document.getElementById("searchInput");
  const mainHeader = document.getElementById("Main_header"); // Use consistent camelCase naming
  const searchContainer = document.getElementById("searchInputContainer");

  searchContainer.classList.add("hidden");
  // Toggle search bar visibility on click of search icon outside
  searchIconOutside.addEventListener("click", function () {
    searchBar.classList.add("active");
    closeIcon.classList.remove("hidden");
    mainHeader.classList.add("hidden"); // Hide main header
    searchContainer.classList.remove("hidden");
    searchInput.focus(); // Focus on input field when expanded
  });

  // Close search bar on click of close icon
  closeIcon.addEventListener("click", function () {
    searchBar.classList.remove("active");
    closeIcon.classList.add("hidden");
    mainHeader.classList.remove("hidden"); // Show main header
    searchContainer.classList.add("hidden");
    searchInput.value = ""; // Clear input value
  });

  // Close search bar if clicked outside
  document.addEventListener("click", function (event) {
    if (
      !searchBar.contains(event.target) &&
      !searchIconOutside.contains(event.target) &&
      !closeIcon.contains(event.target)
    ) {
      searchBar.classList.remove("active");
      closeIcon.classList.add("hidden");
      mainHeader.classList.remove("hidden"); // Show main header
      searchContainer.classList.add("hidden");
      searchInput.value = ""; // Clear input value
    }
  });

 
  

  // Get the header element by its ID
var header = document.getElementById("Main_header");
var cartNotification = document.getElementById('Cart__Notification_');

// Get the offset position of the starting messages container
var messagesContainer = document.querySelector(".container-fluid");
var containerOffset = messagesContainer.offsetTop;

// Get the height of the starting messages container
var containerHeight = messagesContainer.clientHeight;

// Function to update the cart notification position
function updateCartNotificationPosition() {
    var headerHeight = header.offsetHeight;
    var scrollThreshold = containerOffset + containerHeight;
    var currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > scrollThreshold) {
        header.style.position = "fixed";
        header.style.top = "0px";
        header.style.marginTop = "0px";
        cartNotification.style.top = `${headerHeight - 1}px`;

    } else {
        header.style.position = "static"; 
        header.style.top = "";
        header.style.marginTop = "";
        cartNotification.style.top = "";
    }
}

// Add a scroll event listener
window.addEventListener("scroll", updateCartNotificationPosition);

// Call the function initially to set the correct position on page load
updateCartNotificationPosition();





  // // Cards hovering
const cards = document.querySelectorAll(".card");

// Iterate through each card
cards.forEach(card => {

  // For Tribal Pride cards
  card.addEventListener("mouseenter", function () {
    const img1 = this.querySelector(".card-Tribal_Pride1");
    const img2 = this.querySelector(".card-Tribal_Pride2");
    img1.style.display = "none";
    img2.style.display = "block";
  });

  card.addEventListener("mouseleave", function () {
    const img1 = this.querySelector(".card-Tribal_Pride1");
    const img2 = this.querySelector(".card-Tribal_Pride2");
    img1.style.display = "block";
    img2.style.display = "none";
  });


  // For Luminous lush cards
  card.addEventListener("mouseenter", function () {
    const img3 = this.querySelector(".card-Luminous_lush1");
    const img4 = this.querySelector(".card-Luminous_lush2");
    img3.style.display = "none";
    img4.style.display = "block";
  });

  card.addEventListener("mouseleave", function () {
    const img3 = this.querySelector(".card-Luminous_lush1");
    const img4 = this.querySelector(".card-Luminous_lush2");
    img3.style.display = "block";
    img4.style.display = "none";
  });

  // For Celestial_band cards
  card.addEventListener("mouseenter", function () {
    const img5 = this.querySelector(".card-Celestial_band1");
    const img6 = this.querySelector(".card-Celestial_band2");
    img5.style.display = "none";
    img6.style.display = "block";
  });

  card.addEventListener("mouseleave", function () {
    const img5 = this.querySelector(".card-Celestial_band1");
    const img6 = this.querySelector(".card-Celestial_band2");
    img5.style.display = "block";
    img6.style.display = "none";
  });


  // For Reflection cards
  card.addEventListener("mouseenter", function () {
    const img7 = this.querySelector(".card-Reflection1");
    const img8 = this.querySelector(".card-Reflection2");
    img7.style.display = "none";
    img8.style.display = "block";
  });

  card.addEventListener("mouseleave", function () {
    const img7 = this.querySelector(".card-Reflection1");
    const img8 = this.querySelector(".card-Reflection2");
    img7.style.display = "block";
    img8.style.display = "none";
  });


// For Color_Burst cards
card.addEventListener("mouseenter", function () {
  const img9 = this.querySelector(".card-Color_Burst1");
  const img10 = this.querySelector(".card-Color_Burst2");
  img9.style.display = "none";
  img10.style.display = "block";
});

card.addEventListener("mouseleave", function () {
  const img9 = this.querySelector(".card-Color_Burst1");
  const img10 = this.querySelector(".card-Color_Burst2");
  img9.style.display = "block";
  img10.style.display = "none";
});


// For Harmony cards
card.addEventListener("mouseenter", function () {
  const img11 = this.querySelector(".card-Harmony1");
  const img12 = this.querySelector(".card-Harmony2");
  img11.style.display = "none";
  img12.style.display = "block";
});

card.addEventListener("mouseleave", function () {
  const img11 = this.querySelector(".card-Harmony1");
  const img12 = this.querySelector(".card-Harmony2");
  img11.style.display = "block";
  img12.style.display = "none";
});


// For Spirit cards
card.addEventListener("mouseenter", function () {
  const img13 = this.querySelector(".card-Spirit1");
  const img14 = this.querySelector(".card-Spirit2");
  img13.style.display = "none";
  img14.style.display = "block";
});

card.addEventListener("mouseleave", function () {
  const img13 = this.querySelector(".card-Spirit1");
  const img14 = this.querySelector(".card-Spirit2");
  img13.style.display = "block";
  img14.style.display = "none";
});



// For Leaf cards
card.addEventListener("mouseenter", function () {
  const img15 = this.querySelector(".card-Leaf1");
  const img16 = this.querySelector(".card-Leaf2");
  img15.style.display = "none";
  img16.style.display = "block";
});

card.addEventListener("mouseleave", function () {
  const img15 = this.querySelector(".card-Leaf1");
  const img16 = this.querySelector(".card-Leaf2");
  img15.style.display = "block";
  img16.style.display = "none";
});


});





document.getElementById('filterForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get the filter values
  const priceRange = document.getElementById('priceRange').value;
  
  // Apply the filters (this is just a placeholder, you need to implement the actual filter logic)
  console.log('Applying filters:', { priceRange });
  
  // Close the offcanvas
  const offcanvasElement = document.getElementById('offcanvasRight');
  const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
  bsOffcanvas.hide();
});







});





