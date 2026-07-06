document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            
            // Get existing cart from localStorage or create new array
            let cart = JSON.parse(localStorage.getItem('sysStoreCart')) || [];
            
            // Add item
            cart.push({ name, price });
            
            // Save back to localStorage
            localStorage.setItem('sysStoreCart', JSON.stringify(cart));
            
            alert(`${name} added to cart!`);
        });
    });
});
