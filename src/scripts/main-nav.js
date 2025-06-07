const agenda = document.querySelector('.main-nav_agenda');
const contactList = document.querySelector('.main-nav_contact-list');
const navBtn = document.querySelector('.main-nav_btn');

navBtn.addEventListener('click', () => {
  agenda.classList.toggle('show-flex');
  contactList.classList.toggle('show-flex');
  navBtn.textContent = navBtn.textContent === 'Menu' ? 'Close' : 'Menu';
});
