import React, { useEffect, useState } from 'react'
import './RowPost.css'
import YouTubePlayer from 'react-youtube'
import axios from '../../axios'
import { API_KEY, imgUrl } from '../../Constants/constants'

function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState('')

    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovies(response.data.results)
        }).catch(err => alert('Network Error'))

    }, [])

    const opts = {
        height: '800',
        width: '100%',
        playerVars: {
            autoplay: 0
        }
    }

    const handleMovie = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
            } else {
                console.log('Array empty');
            }

        })
    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>

            <div className='posters'>
                {movies.map((obj) =>
                    <img onClick={() => { handleMovie(obj.id) }} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imgUrl + obj?.backdrop_path}`} />
                )}
            </div>

            {urlId && <YouTubePlayer opts={opts} videoId={urlId?.key}></YouTubePlayer>}

        </div>
    )
}

export default RowPost
