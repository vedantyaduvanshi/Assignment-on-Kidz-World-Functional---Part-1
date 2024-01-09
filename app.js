document.addEventListener("DOMContentLoaded", function() {
    // Initialize cart count
    let cartCount = 0;
    const cartItems = {};
  
    // Function to handle adding items to cart
    function addToCart(itemId, itemName) {
      if (cartItems[itemId]) {
        cartItems[itemId]++;
      } else {
        cartItems[itemId] = 1;
      }
      cartCount++;
      document.getElementById('cart-value').innerText = cartCount;
      console.log(`${itemName} added to cart.`);
    }
  
    // Add event listeners to "Add" buttons
    const addButtons = document.querySelectorAll('.button');
    addButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
        const itemId = `item-${index + 1}`; // Generating unique itemId for each item
        const itemName = button.parentNode.previousElementSibling.querySelector('h3').innerText;
        addToCart(itemId, itemName);
      });
    });
  
    // Function to handle printing cart details
    function printCartDetails() {
        console.log('Cart Items:');
        for (const [itemId, quantity] of Object.entries(cartItems)) {
          const itemElement = document.querySelector(`#${itemId} h3`);
          if (itemElement) {
            const itemName = itemElement.innerText;
            console.log(`${itemName}: ${quantity}`);
          } else {
            console.error(`Element with ID ${itemId} not found.`);
          }
        }
        // Here, you can also calculate the total amount based on the items and their quantities if needed.
      }
      
  
    // Add event listener to cart icon
    document.getElementById('cart').addEventListener('click', printCartDetails);
  });
  