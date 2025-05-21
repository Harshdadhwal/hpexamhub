// Function to load header and footer
function loadCommonComponents() {
    // Load header
    fetch('/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });
    
    // Load footer
    fetch('/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', loadCommonComponents);