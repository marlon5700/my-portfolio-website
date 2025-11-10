const video1 = document.getElementById('projectVideo1');

const videoList = [video1];

const navbar = document.getElementById('top-nav')

videoList.forEach(function(video){
    video.addEventListener('mouseover', function(){
        video.play()
    });
    
    video.addEventListener('mouseout', function() {  
        video.pause()
    });
});


const menu = document.querySelector('#mobile-menu')

const menuLinks = document.querySelector('.navbar__menu')

const navBar = document.getElementById('top-nav')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    navBar.classList.toggle('active')

    
      
})