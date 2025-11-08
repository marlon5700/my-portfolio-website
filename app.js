const video1 = document.getElementById('projectVideo1');

const videoList = [video1];

videoList.forEach(function(video){
    video.addEventListener('mouseover', function(){
        video.play()
    });
    
    video.addEventListener('mouseout', function() {  
        video.pause()
    });
});