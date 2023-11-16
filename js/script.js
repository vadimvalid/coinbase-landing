const headerWrapper = document.getElementById('header-wrapper');
const burger = document.getElementById('header-burger');

burger.addEventListener('click', toggleClass);

// create toggle function
function toggleClass() {
  headerWrapper.classList.toggle('show');
}
