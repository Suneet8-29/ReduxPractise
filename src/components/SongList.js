import React, { Component } from 'react'
import { connect } from 'react-redux'
import {selectSong} from '../actions'


class SongList extends Component{

    componentDidMount() {
        console.log(this.props.songList);
    }

    renderList() {
        return this.props.songList.map((song) => {
            return (
                <div className='item' key={song.title}>
                    <div className='right floated content'>
                        <button onClick={()=>this.props.selectSong(song)}  className='button ui primary' >Select</button>
                    </div>
                    <div className='content'>
                    {song.title} 
                    </div>
                </div>
                
            )
        })
    }
    
    render() {        
        return (
            <div className='ui divided list'>{this.renderList()}</div>
        ) 
    }
}

const mapStateToProps = ({songList}) => {
     return {songList : songList};
}

export default connect(mapStateToProps, {selectSong})(SongList);