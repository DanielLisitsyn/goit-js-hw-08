import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Player (iframe);

    player.on('timeupdate', throttle(handleTimeUpdate, 1000));

function handleTimeUpdate({seconds}) {
    // console.log(event);
    localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
 
};

   const seconds = JSON.parse(localStorage.getItem("videoplayer-current-time")) || 0;
player.setCurrentTime(seconds);


