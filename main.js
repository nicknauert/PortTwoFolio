const aboutBtn = document.querySelector('.about');
const projectsBtn = document.querySelector('.projects');
const contactBtn = document.querySelector('.contact');
const main = document.querySelector('main');
const home = document.getElementById("home");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
const aboutClose = document.getElementById('aboutClose');
const projectsClose = document.getElementById('projectsClose');
const contactClose = document.getElementById('contactClose');


aboutBtn.addEventListener('click', function(e){
  home.classList.remove('show');
  home.classList.add('hide');
  about.classList.remove('hidePage');
  about.classList.add('showPage');
})

projectsBtn.addEventListener('click', function(e){
  home.classList.remove('show');
  home.classList.add('hide');
  projects.classList.remove('hidePage');
  projects.classList.add('showPage');
})

contactBtn.addEventListener('click', function(e){
  home.classList.remove('show');
  home.classList.add('hide');
  contact.classList.remove('hidePage');
  contact.classList.add('showPage');

})

aboutClose.addEventListener('click', function(e){
  home.classList.remove('hide');
  home.classList.add('show');
  about.classList.remove('showPage');
  about.classList.add('hidePage');
})

projectsClose.addEventListener('click', function(e){
  home.classList.remove('hide');
  home.classList.add('show');
  projects.classList.remove('showPage');
  projects.classList.add('hidePage');
})

contactClose.addEventListener('click', function(e){
  home.classList.remove('hide');
  home.classList.add('show');
  contact.classList.remove('showPage');
  contact.classList.add('hidePage');
})

///////////////////////
// BG PARALLAX

let lFollowX = 0,
lFollowY = 0,
x = 0,
y = 0
const friction = 1 / 40;
const bg = document.querySelector(".bg")

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;

  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  bg.style.transform = translate

  window.requestAnimationFrame(moveBackground);
}

window.addEventListener('mousemove', function(e){
  var lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;
})

moveBackground();
