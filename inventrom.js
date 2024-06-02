document.addEventListener("DOMContentLoaded", function () {
    let icon = document.getElementsByClassName('burger')[0];
    let navList = document.querySelector('.nav-list');
  
    icon.addEventListener('click', ()=>   navList.classList.toggle('show')
    );
  });

