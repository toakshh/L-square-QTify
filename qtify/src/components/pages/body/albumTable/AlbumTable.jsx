import React from 'react'
import "./AlbumTable.css";

const AlbumTable = (props) => {
    const {songs}= props;
  return (
    <div className='albumTable-main'>
        <div className="headers">
            <div>Title</div>
            <div>Artists</div>
            <div>Duration</div>
        </div>
        {songs && songs?.map(song=>{
        // console.log(song)
        return (<div className='song-list' key={song.id}>
          <div className='song-item'>
            <p>{song.title}</p>
            <p>{(song.artists).map(artist=> <span>{artist}</span>)}</p>
            <p>{(((song.durationInMs/60000)%60).toFixed(2))}</p> 
          </div> 
        </div>)
      })}
    </div>
  )
}

export default AlbumTable