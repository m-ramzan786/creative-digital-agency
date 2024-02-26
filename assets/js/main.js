// Mobile toggle
const toggleBtn = document.querySelector(".toggle_btn i");
let toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".links-container");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
// Mobile toggle hide
const toggle = document.getElementById('toggle');
const toggle_menu = document.getElementById('toggleMenu');

document.onclick = function(e) {
    if (e.target.id !== 'toggle_menu' && e.target.id !== 'toggle') {
      toggleBtnIcon.classList.remove('fa-xmark');
      toggle_menu.classList.remove('open');
      toggleBtnIcon.classList.add("fa-bars");
    }
}


// nav active by section on scroll

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

  let scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");


    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".nav-container a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".nav-container a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}


// Scroll top
// first function
const scrollBtn = document.querySelector(".scroll-top");
const navlink2 = document.querySelector(".nav-link");
window.addEventListener("scroll", function () {
  if (
    this.document.body.scrollTop > 100 ||
    this.document.documentElement.scrollTop > 100
  ) {
    scrollBtn.style.display = "block";
    navlink2.classList.remove('active');
  } else {
    scrollBtn.style.display = "none";
    navlink2.classList.add('active');
  }
});
//second function
scrollBtn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});


// nav mini on scroll down
window.addEventListener("scroll", function() {
  var navigation = document.querySelector("nav");
  navigation.classList.toggle("sticky", window.scrollY > 0);
});


// hover effect 2 elements
let container1 = document.querySelector('.t-1');

let lable1 = document.querySelector('.tl-1');
let title1 = document.querySelector('.t_title_1');

container1.addEventListener('mouseover', () => {
  lable1.style.backgroundColor = '#11749e';
  title1.style.color = '#fff';
});

container1.addEventListener('mouseout', () => {
  lable1.style.backgroundColor = '';
  title1.style.color = '';
});
// hover effect 2 elements
let container2 = document.querySelector('.t-2');

let lable2 = document.querySelector('.tl-2');
let title2 = document.querySelector('.t_title_2');

container2.addEventListener('mouseover', () => {
  lable2.style.backgroundColor = '#11749e';
  title2.style.color = '#fff';
});

container2.addEventListener('mouseout', () => {
  lable2.style.backgroundColor = '';
  title2.style.color = '';
});
// hover effect 2 elements
let container3 = document.querySelector('.t-3');

let lable3 = document.querySelector('.tl-3');
let title3 = document.querySelector('.t_title_3');

container3.addEventListener('mouseover', () => {
  lable3.style.backgroundColor = '#11749e';
  title3.style.color = '#fff';
});

container3.addEventListener('mouseout', () => {
  lable3.style.backgroundColor = '';
  title3.style.color = '';
});
// hover effect 2 elements
let container4 = document.querySelector('.t-4');

let lable4 = document.querySelector('.tl-4');
let title4 = document.querySelector('.t_title_4');

container4.addEventListener('mouseover', () => {
  lable4.style.backgroundColor = '#11749e';
  title4.style.color = '#fff';
});

container4.addEventListener('mouseout', () => {
  lable4.style.backgroundColor = '';
  title4.style.color = '';
});
