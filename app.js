let nav = document.querySelector('.nav-items');
let navIcon = document.querySelector('.nav-list');
navIcon.addEventListener('click',function(){
    console.log('clicked')
    nav.classList.toggle('show')
})