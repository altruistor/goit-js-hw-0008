
// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// console.log(player);

// // player.on('timeupdate', throttle(function(data) {
// //     window.localStorage.setItem("videoplayer-current-time", data.seconds);
// // }, 250));



import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const player = new Player('vimeo-player');


const savedTime = localStorage.getItem('videoplayer-current-time');


if (savedTime) {
  player.setCurrentTime(savedTime);
}


const saveCurrentTime = throttle(async () => {
  const currentTime = await player.getCurrentTime();
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000);


player.on('timeupdate', saveCurrentTime);

console.log(savedTime);


// import Player from '@vimeo/player';
// import throttle  from "lodash.throttle"
// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);
// player.on('timeupdate',throttle(onPlay, 1000) )
//      function onPlay (e) {
//         localStorage.setItem("videoplayer-current-time", e.seconds)
//      }
//  player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))