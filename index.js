document.addEventListener("DOMContentLoaded", function () {
  // Get the button element
  const button = document.querySelector('button');

  // Function to generate a random position
  function getRandomPosition() {
    const width = window.innerWidth - button.clientWidth;
    const height = window.innerHeight - button.clientHeight;
    const randomX = Math.floor(Math.random() * width);
    const randomY = Math.floor(Math.random() * height);
    return { x: randomX, y: randomY };
  }

  // Function to handle button click event
  function handleClick() {
    const randomPosition = getRandomPosition();
    button.style.left = `${randomPosition.x}px`;
    button.style.top = `${randomPosition.y}px`;
  }


  const user = "farhanadnan82";
  const domain = "gmail.com";
  const email = `${user}@${domain}`;
  
  const emailButton = document.getElementById("email-protected");
  if (emailButton) {
    emailButton.style.cursor = "pointer";
    emailButton.addEventListener("click", function () {
      window.location.href = `mailto:${email}`;
    });
  }

  // Protect project links by obfuscating their hrefs and restoring on click
  document.querySelectorAll('.project-card a').forEach(function(link) {
    // Store the real href in a data attribute and obfuscate the href
    const realHref = link.getAttribute('href');
    if (realHref) {
      link.setAttribute('data-href', realHref);
      link.setAttribute('href', '#');
      link.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(link.getAttribute('data-href'), '_blank');
      });
    }
  });
});