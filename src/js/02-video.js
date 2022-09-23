import { throttle } from 'lodash';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

let CURRENTTIME_KEY = 'videoplayer-current-time';

function onLoad() {
  player.setCurrentTime(localStorage.getItem(CURRENTTIME_KEY));
}

function onTimeUpdate() {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem(CURRENTTIME_KEY, seconds);
    console.log(localStorage.getItem(CURRENTTIME_KEY));
  });
}

window.onload = onLoad();
player.on('timeupdate', throttle(onTimeUpdate, 1000));
// player.off('timeupdate');
