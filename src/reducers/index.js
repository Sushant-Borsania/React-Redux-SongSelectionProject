import {combineReducers} from 'redux';

const songsReducers = () => {
  return [
    {title: 'No Scrubs', duration: '4:05'},
    {title: 'Jane Tu Ya Jane Na', duration: '3:15'},
    {title: 'Ye Sham Mastani', duration: '4:45'},
    {title: 'iktara', duration: '6:00'},
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED'){
    return action.payload;
  }
  return selectedSong;
}

export default combineReducers({
  songs: songsReducers,
  selectedSong: selectedSongReducer
});