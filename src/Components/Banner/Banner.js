import React, { useEffect, useState } from 'react'
import { API_KEY, imgUrl } from '../../Constants/constants'
import axios from '../../axios'
import './Banner.css'

function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {

    var randomValue = Math.floor(Math.random() * 20) + 1;

    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      setMovie(response.data.results[randomValue]);

    });
  }, []);


  return (
    <div
      style={{ backgroundImage: `url(${imgUrl + movie?.backdrop_path})` }}
      className='banner'>
      <div className='content' >
        <h1 className='title'>{movie?.title}</h1>
        <div className='banner_buttons' >
          <button className='button' >Play</button>
          <button className='button' >My list</button>
        </div>
        <h1 className='description'>{movie?.overview}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
