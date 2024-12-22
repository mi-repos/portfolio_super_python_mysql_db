// Function to scroll the page up or down
function scrollPage(direction) {
    if (direction === 'up') {
        window.scrollBy(0, -window.innerHeight); // Scroll up by one screen height
    } else if (direction === 'down') {
        window.scrollBy(0, window.innerHeight); // Scroll down by one screen height
    }
}

// Toggle hamburger menu
document.getElementById('hamburger-menu').addEventListener('click', function() {
    console.log('Hamburger menu clicked!'); // Check if the click event is triggered
    document.querySelector('nav').classList.toggle('active');  // Toggles the 'active' class on the nav
});

// Contact form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Your message has been submitted!');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all required fields.');
    }
});

// JavaScript for smooth scrolling
document.getElementById("scrollUp").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll to top
    });
});

document.getElementById("scrollDown").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth" // Smooth scroll to bottom
    });
});

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the hamburger button and the nav element
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    // When the hamburger is clicked, toggle the 'active' class on the nav
    hamburger.addEventListener('click', function () {
        nav.classList.toggle('active'); // This will show/hide the nav menu
    });

    // Ensure that the hamburger icon is visible when screen size is small
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            // If the screen is large, make sure the nav is visible
            nav.classList.remove('active');
        }
    });
});
