const readButton = document.querySelector('.read-button');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('close-button');

readButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
});
