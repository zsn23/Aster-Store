


document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const closeIcon = document.getElementById('closeIcon');
    const searchResults = document.getElementById('searchResults');
    
    const products = [
        { category: 'Rings', name: 'Purity Leaf', sale: false, image: './PICTURES/Purify leaf/BRT-004-BLK-1.webp'      ,link: '' },
        { category: 'Rings', name: 'Free Spirit', sale: true, image: './PICTURES/Free spirit/RNG-004-1.webp'      ,link: '' },
        { category: 'Bracelets', name: 'Harmony', sale: false, image: './PICTURES/Harmony/RNG-002-BLK-1.webp'      ,link: 'Harmony.html' },
        { category: 'Necklaces', name: 'Color Burst', sale: false, image: './PICTURES/Color burst/NKC-007-2.webp'      ,link: '' },
        { category: 'Bracelets', name: 'Reflection', sale: false, image: './PICTURES/Reflection/BRT-001-PNK.webp'      ,link: '' },
        { category: 'Necklace Sets', name: 'Celestial Band', sale: false, image: './PICTURES/Celestrial band/NKC-005-AAA-2.webp'      ,link: '' },
        { category: 'Necklace Sets', name: 'Luminous lush', sale: false, image: './PICTURES/Lumus lush/NES-001-BLK-1.webp'      ,link: '' },
        { category: 'Earrings', name: 'Tribal Pride', sale: true, image: './PICTURES/Tribal pride/ERG-003-BLU-2.webp'      ,link: 'card_mainPage.html'  }
    ];

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        searchResults.innerHTML = '';

        const filteredProducts = products.filter(product => {
            return product.category.toLowerCase().includes(query) ||
                   product.name.toLowerCase().includes(query) ||
                   (query === 'sale' && product.sale);
        });

        if (filteredProducts.length > 0) {
            const header = document.createElement('div');
            header.classList.add('search-header');
            header.textContent = 'Products';
            searchResults.appendChild(header);

            filteredProducts.forEach(product => {
                const resultItem = document.createElement('div');
                resultItem.classList.add('search-result-item');
                resultItem.innerHTML = `
                   
                     <div class="container d-flex align-items-center hoverOnSearchItems">
                        <a href="${product.link}" class=" d-flex align-items-center  text-dark" style="text-decoration:none;">
                            <img src="${product.image}" alt="${product.name}">
                            <div style="font-weight: bold; font-size: 12px; font-family: Questrial, sans-serif; letter-spacing: 0.5px;">${product.name}</div>
                        </a>
                    </div>
                `;
                searchResults.appendChild(resultItem);
               
            });

            const footer = document.createElement('div');
            footer.classList.add('search-footer');
            footer.textContent = `Search for "${query}"`;
            searchResults.appendChild(footer);

            searchResults.classList.remove('hidden');
        } else {
            searchResults.classList.add('hidden');
        }

        if (query) {
            closeIcon.classList.remove('hidden');
        } else {
           
            searchResults.classList.add('hidden');
        }
    });

    closeIcon.addEventListener('click', function() {
        searchInput.value = '';
        searchResults.innerHTML = '';
        closeIcon.classList.add('hidden');
        searchResults.classList.add('hidden');
    });
        document.addEventListener('click', function(event) {
        const isClickInside = searchInput.contains(event.target) || searchResults.contains(event.target);
        if (!isClickInside) {
            searchResults.classList.add('hidden');
            
        }
    });

});


