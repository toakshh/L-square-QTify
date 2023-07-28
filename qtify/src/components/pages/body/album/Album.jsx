import React from 'react'
import { useParams } from 'react-router-dom';
import "./Album.css";
import useApiCall from "../../../../hooks/useApiCall";
import apiUrl from '../../../assets/api';
import Loading from '../../loading/Loading';
import Error from "../../error/Error";
import AlbumTable from '../albumTable/AlbumTable';

const Album = () => {
  const { slug } = useParams();
  const dataUrl = `${apiUrl.slug}/${slug}`;
  const [data,loading,error] = useApiCall(dataUrl);

  const songs= data?.songs;
  return (
    <div className='album-main'>
      { error ? <Error msg={error}/> :
       loading ? <Loading /> :
        (
        <>
          <div className="album-detail">
            <div className="cover-image">
              <img src={data.image} alt="album cover" />
            </div>
            <div className="text-info">
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <p>{songs && `${songs.length} songs , ${data.follows} Follows`}</p>
              <span><button>shuffle</button>
              <button>Add to library</button></span>
            </div>
          </div>
          <div className="album-songs">
            <AlbumTable songs={songs} />
          </div>
        </>)
      }

    </div>
  )
}

export default Album