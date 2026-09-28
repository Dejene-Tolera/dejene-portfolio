const menu = document.getElementById('menu');
const links = document.getElementById('links');
const year = document.getElementById('year');

menu.addEventListener('click', () => {
  links.classList.toggle('open');
});

links.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => links.classList.remove('open'));
});

year.textContent = new Date().getFullYear();
