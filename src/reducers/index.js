import { combineReducers } from 'redux'

const songsListReducer = () => {
    return [
        {
            title: 'Habit T-Mass Remix',
            duration: '4:05'
        },
        {
            title: 'Pill',
            duration: '2:25'
        },
        {
            title: 'Senses',
            duration: '5:20'
        },
        {
            title: 'Hello Bitches',
            duration: '3:10'
        }
    ]
}

const selectedSong = (selectedSong= null,  action) => {
    if (action.type === 'SELECT_SONG') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songList : songsListReducer,
    selectedSong
})

