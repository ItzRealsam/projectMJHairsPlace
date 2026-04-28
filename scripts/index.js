// == CHANGE HEADER BG == 
const header = document.querySelector(".header");
const sections = document.querySelectorAll(".changeHeader");

function updateHeader() {
  const headerBottom = header.getBoundingClientRect().bottom;

  let active = false;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    // Check if header overlaps the section
    if (rect.top <= headerBottom && rect.bottom >= headerBottom) {
      active = true;
    }
  });

  header.classList.toggle("changeHeaderBG", active);
}

window.addEventListener("scroll", updateHeader);
window.addEventListener("resize", updateHeader);

// run once on load
updateHeader();

// == NAV_LIST ==
const toggleBtn = document.querySelector('.nav__menu');
const navList = document.querySelector('.nav__list');

toggleBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
});