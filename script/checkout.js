// Function to handle form submission and validation
function handleFormSubmission(event) {
    event.preventDefault(); 

    const nameInput = document.getElementById('name');
    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        return;
    }

    const emailInput = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    const cardNumberInput = document.getElementById('card-number');
    if (cardNumberInput.value.length !== 16 || isNaN(cardNumberInput.value)) {
        alert('Please enter a valid 16-digit card number.');
        return;
    }

    const expiryInput = document.getElementById('expiry');
    const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryPattern.test(expiryInput.value)) {
        alert('Please enter a valid expiry date (MM/YY).');
        return;
    }

    const cvcInput = document.getElementById('cvc');
    if (cvcInput.value.length !== 3 || isNaN(cvcInput.value)) {
        alert('Please enter a valid 3-digit CVC.');
        return;
    }

    alert('Order submitted successfully!');
    event.target.submit(); 
}

// Function to display the checkout form
function displayCheckoutForm() {

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Your cart is empty. Please add some products to checkout.');
        return;
    }

    let productSummaryHtml = `<h2>Product Summary</h2><ul>`;
    cart.forEach(product => {
        productSummaryHtml += `<li>${product.name} - ${product.price}</li>`;
    });
    productSummaryHtml += `</ul>`;

    const checkoutFormHtml = `
        ${productSummaryHtml}
        <h3>Customer Information</h3>
        <form class="js-checkout-form" onsubmit="handleFormSubmission(event)">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <h3>Payment Information</h3>
            <label for="card-number">Card Number:</label>
            <input type="text" id="card-number" name="card-number" required>
            <label for="expiry">Expiry Date:</label>
            <input type="text" id="expiry" name="expiry" placeholder="MM/YY" required>
            <label for="cvc">CVC:</label>
            <input type="text" id="cvc" name="cvc" required>
            <button type="submit">Complete Purchase</button>
        </form>
    `;

    const checkoutFormContainer = document.querySelector('form');
    if (checkoutFormContainer) {
        checkoutFormContainer.innerHTML = checkoutFormHtml;
    } else {
        console.error("No element with class 'js-checkout-form' found.");
        return;
    }


    const checkoutForm = document.querySelector('.js-checkout-form');
    checkoutForm.addEventListener('submit', handleFormSubmission);
}

displayCheckoutForm();


function displayOrderSummary() {
    const cart = JSON.parse(localStorage.getItem("cart") || []);

    let subtotal = 0;
    cart.forEach(product => {
        const price = parseFloat(product.price.replace("R", ""));
        subtotal += price;
    });

    const taxRate = 0.0555;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    const orderSummaryHTML = document.querySelector('.js-order-summary');
    orderSummaryHTML.innerHTML =
     `
        <h2>Order Summary</h2>
        <p>Subtotal: R${subtotal.toFixed(2)}</p>
        <p>Tax: R${tax.toFixed(2)}</p>
        <p>Total: R${total.toFixed(2)}</p>
    `;

}

displayOrderSummary();
