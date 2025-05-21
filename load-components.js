// load-components.js

function resolvePath(relativePath) {
  const currentPath = window.location.pathname;
  const depth = currentPath.split('/').length - 2; // -2 accounts for '' and the file
  const prefix = '../'.repeat(depth);
  return prefix + relativePath;
}

document.addEventListener("DOMContentLoaded", () => {
  const headerPath = resolvePath("assets/header.html");
  const footerPath = resolvePath("assets/footer.html");

  fetch(headerPath)
    .then(res => res.text())
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data;
    });

  fetch(footerPath)
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});
