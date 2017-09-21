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
