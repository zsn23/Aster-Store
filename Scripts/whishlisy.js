

function toggleWishlist(element) {
    const heartOutline = element.closest('.icon-link').querySelector('.bi-heart');
    const heartFill = element.closest('.icon-link').querySelector('.bi-heart-fill');
    const isWishlisted = heartFill.style.display === 'block';

    if (isWishlisted) {
      heartFill.style.display = 'none';
      heartOutline.style.display = 'block';
    } else {
      heartFill.style.display = 'block';
      heartOutline.style.display = 'none';
    }
  }