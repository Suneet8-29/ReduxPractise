import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({ selectedSong }) => {
    if (!selectedSong) {
        return <div>Please Select a song to view details !</div>
    }
    return (
        <div>
            <div>{selectedSong.title}</div>
            <div>{selectedSong.duration}</div>
        </div>
    )
}

const mapStateToProps = ({selectedSong}) => {
    return { selectedSong: selectedSong };
}

export default connect(mapStateToProps)(SongDetail);