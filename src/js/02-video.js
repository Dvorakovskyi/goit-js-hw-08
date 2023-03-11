import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoEl = document.querySelector('#vimeo-player');

const STOREAGE_CURRENT_TIME_KEY = 'videoplayer-current-time';

const videoPlayer = new Player(videoEl);

const handleSavedCurrentTime = event => {
  localStorage.setItem(STOREAGE_CURRENT_TIME_KEY, event.seconds);
};

videoPlayer.on('timeupdate', throttle(handleSavedCurrentTime, 1000));

const currentTime = localStorage.getItem(STOREAGE_CURRENT_TIME_KEY)
    ? localStorage.getItem(STOREAGE_CURRENT_TIME_KEY)
    : 0;

videoPlayer.setCurrentTime(currentTime);

