var player = videojs('my-player');
    function play() { 
    player.play();
    }
    function pause() {
        player.pause();
    }
    function stop(){
        player.currentTime(0);
        player.pause();
    }
    function JumpForwards(){
         player.currentTime(player.currentTime() + 5);
    }
    function JumpBackwards(){
        player.currentTime(player.currentTime() - 5);
}