import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const All_movie = () => {
  const [NowPlayingShows, setNowPlayingShows] = useState([]);
  const [discoverShows, setDiscoverShows] = useState([]);
  const [PopularShows, setPopularShows] = useState([]);

  const getNowPlayingShows = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=3c581ea7a292c1bd5b4acc5d7afa8699');
      const json = await response.json();
      setNowPlayingShows(json.results);
    } catch (err) {
      console.log(err);
    }
  };

  const getPopularShows = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3c581ea7a292c1bd5b4acc5d7afa8699');
      const json = await response.json();
      setPopularShows(json.results);
    } catch (err) {
      console.log(err);
    }
  };

  const getDiscoverShows = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=3c581ea7a292c1bd5b4acc5d7afa8699');
      const json = await response.json();
      setDiscoverShows(json.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNowPlayingShows();
    getDiscoverShows();
    getPopularShows();
  }, []);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 6,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  };

  return (
    <div className='flex justify-center w-screen'>
      <div className="w-[100%]">

        
        {/* Discover Section */}
        <div className='pt-20'>
          <div className="w-full max-w-[1500px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-2 mx-auto">
            {discoverShows.map((data) => (
              <div key={data.id} className=" rounded-md flex justify-center px-4">
                <div>
                  <img className="md:h-96 w-full rounded-md" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
                  <div className="text-xl font-bold">{data.title}</div>
                  <div className="text-sm">{data.release_date}</div>
                  <div className="">{data.vote_average}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Now Playing Section */}
        <div className='lg:px-40'>
          <div className='p-4 pt-8 text-center'>
            <h1>Now Playing</h1>
          </div>
          <Slider {...sliderSettings}>
            {NowPlayingShows.map((data) => (
              <div key={data.id} className=" rounded-md flex justify-center p-4">
                <div>
                  <img className=" md:h-96 rounded-md" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
                  <div className="text-xl font-bold">{data.title}</div>
                  <div className="text-sm">{data.release_date}</div>
                  <div className="">{data.vote_average}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Popular Section */}
        <div className='lg:px-40'>
          <div className='p-4 pt-8 text-center'>
            <h1>Popular</h1>
          </div>
          <Slider {...sliderSettings}>
            {PopularShows.map((data) => (
              <div key={data.id} className=" rounded-md flex justify-center p-4">
                <div>
                <img className=" md:h-96 rounded-md" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
                  <div className="text-xl font-bold">{data.title}</div>
                  <div className="text-sm">{data.release_date}</div>
                  <div className="">{data.vote_average}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>


      </div>
    </div>
  );
};

export default All_movie;