// includes.js

// helper: set active nav link
function setActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.navbar a').forEach(link => {
    // strip trailing slash for consistency
    const href = new URL(link.href).pathname.replace(/\/$/, '');
    const current = path.replace(/\/$/, '');
    if (href === current) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// include loader now returns a Promise
function includeHTML(selector, url) {
  return fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(res.statusText);
      return res.text();
    })
    .then(html => {
      document.querySelector(selector).innerHTML = html;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  // first load header & footer, then set active state
  Promise.all([
    includeHTML('header.header-placeholder', 'header.html'),
    includeHTML('footer.footer-placeholder', 'footer.html')
  ])
  .then(setActiveNav)
  .catch(e => console.error(e));
});
