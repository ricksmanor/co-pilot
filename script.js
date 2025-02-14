// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else {
        alert('Form submitted successfully!');
        // Here you can add code to send the form data to your server
    }
});

// Dynamic Content Loading
document.addEventListener('DOMContentLoaded', function() {
    const blogSection = document.getElementById('blog');
    const newPost = document.createElement('article');
    newPost.innerHTML = `
        <h3>Post 4: JavaScript Enhancements</h3>
        <p>In this post, we explore various JavaScript enhancements to improve user experience on your website. Learn how to implement smooth scrolling, form validation, and dynamic content loading to make your site more interactive and user-friendly.</p>
    `;
    blogSection.appendChild(newPost);
});
