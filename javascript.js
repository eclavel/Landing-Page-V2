const hamburger = document.querySelector('.hamburger');
const headerLinks = document.querySelector('.headerLinks');
hamburger.addEventListener('click', ()=>{
  headerLinks.classList.toggle('active');
})