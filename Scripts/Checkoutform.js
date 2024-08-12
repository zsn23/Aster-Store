document.addEventListener("DOMContentLoaded", function () {
    const billingSame = document.getElementById('same-address');
    const billingDifferent = document.getElementById('billing-different');
    const billingAddress = document.getElementById('billing-address');
   
    billingSame.addEventListener('click', function () {
        billingAddress.classList.add('d-none');
    });

    billingDifferent.addEventListener('click', function () {
        billingAddress.classList.remove('d-none');
    });

    document.querySelectorAll('input[name="payment-method"]').forEach((elem) => {
        elem.addEventListener("change", function(event) {
            var bankDetails = document.getElementById('bank-details');
            var codDetails = document.getElementById('COD');
            
            let CodContainer=document.getElementById('CodContainer');
            let Bank_DepositContainer=document.getElementById('Bank_DepositContainer');
            
            let billing_address_Section=document.getElementById('billing_addressSection');

         


            if (event.target.id === 'bank-deposit') {
                bankDetails.classList.remove('d-none');
                billing_address_Section.classList.add('d-block');
                codDetails.classList.add('d-none');


                Bank_DepositContainer.setAttribute('style', 'border: 1px solid black !important ; background: WhiteSmoke !important' );
                
                CodContainer.setAttribute('style', 'border: 0px !important');
                CodContainer.style.background='white';
                
  
            } else if (event.target.id === 'cod') {
                bankDetails.classList.add('d-none');
                billing_address_Section.classList.remove('d-block');
                codDetails.classList.remove('d-none');

                CodContainer.setAttribute('style', 'border: 1px solid black !important; background: WhiteSmoke !important');

                Bank_DepositContainer.setAttribute('style', 'border: 0px !important');
                Bank_DepositContainer.style.background='white';

                
            }
        });
    });

    document.querySelectorAll('input[name="billing"]').forEach((elem) => {
        elem.addEventListener("change", function(event) {

         let different__billing_address=document.getElementById('different_billing_address');
         let shipping_address = document.getElementById('shipping__address_')

       

            if (event.target.id === 'same-address') {

             different__billing_address.setAttribute('style', 'border: 0px !important');
             different__billing_address.style.background='white';

             
             shipping_address.setAttribute('style', 'border: 1px solid black !important ; background: WhiteSmoke !important' );
            
 
            }
           else if (event.target.id === 'billing-different') {
             
             different__billing_address.setAttribute('style', 'border: 1px solid black !important');
             different__billing_address.style.background='WhiteSmoke';

             shipping_address.setAttribute('style', 'border: 0px !important');
             shipping_address.style.background='white';
             
 
            }
        });
    });




    // Initialize cart array from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to render cart items on the checkout form
function renderCheckoutForm() {
    const checkoutFormContainer = document.querySelector('.rightside');
    const checkoutItemsContainer = checkoutFormContainer.querySelector('.card');
    const subtotalElement = checkoutFormContainer.querySelector('.subtotal');
    const shippingElement = checkoutFormContainer.querySelector('.shipping');
    const totalElement = checkoutFormContainer.querySelector('.total');
    
    // Clear current checkout items
    checkoutItemsContainer.innerHTML = `
        <div class="logo_icon">
            <img src="../PICTURES/Aster_Logo_Transparent footer.png" class="img_logo__" style="height: auto; width: 50%;"/>
            <div> 
              <i class="bi bi-bag"></i>
            </div>
        </div>
    `;

    let subtotal = 0;
    const shipping = 150;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const checkoutItem = document.createElement('div');
        checkoutItem.classList.add('row', 'g-0', 'mb-4');
        checkoutItem.innerHTML = `
            <div class="col-6 d-flex align-items-center position-relative">
                <img src="${item.pic}" alt="Product Image" class="me-3" style="width: 70px; height: 70px; border-radius:15%;">
                <div class="position-absolute  text-white rounded-circle " style="left: 51px;top: -7px; padding: 3px 8px;font-size: 11px; background:#666666; font-weight:bold;">${item.quantity}</div>
                <h6 style="font-size:small; ">${item.title}</h6>
            </div>
            <div class="col-6 d-flex justify-content-end align-items-center">
                <span class="Rupees">Rs ${itemTotal.toFixed(2)}</span>
            </div>
        `;
        checkoutItemsContainer.appendChild(checkoutItem);
    });

    const total = subtotal + shipping;
    
    // Append the subtotal, shipping, and total information
    const totalsSection = document.createElement('div');
    totalsSection.innerHTML = `
        <div class="mb-4">
            <div class="d-flex justify-content-between">
                <span class="Rupees">Subtotal</span>
                <span class="Rupees">Rs ${subtotal.toFixed(2)}</span>
            </div>
            <div class="d-flex justify-content-between">
                <span class="Rupees">Shipping</span>
                <span class="Rupees">Rs ${shipping.toFixed(2)}</span>
            </div>
        </div>
        <div class="d-flex justify-content-between fw-semibold">
            <span>Total</span>
            <span><span style="font-size: smaller; font-weight: 200;">PKR</span> Rs ${total.toFixed(2)}</span>
        </div>
    `;
    checkoutItemsContainer.appendChild(totalsSection);
}

// Initial render
renderCheckoutForm();

   
  
});