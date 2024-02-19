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

// Add click event listener to the button
button.addEventListener('click', handleClick);
