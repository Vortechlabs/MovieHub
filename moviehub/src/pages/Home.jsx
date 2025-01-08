import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GooglePlayMovieLogo from "../assets/images/GooglePlayMovieLogo.webp"

const Home = () => {
 // const [NowPlayingShows, setNowPlayingShows] = useState([]);
  const [discoverShows, setDiscoverShows] = useState([]);
 // const [PopularShows, setPopularShows] = useState([]);

 /* const getNowPlayingShows = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=3c581ea7a292c1bd5b4acc5d7afa8699');
      const json = await response.json();
      setNowPlayingShows(json.results);
    } catch (err) {
      console.log(err);
    }
  };*/

  /*const getPopularShows = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3c581ea7a292c1bd5b4acc5d7afa8699');
      const json = await response.json();
      setPopularShows(json.results);
    } catch (err) {
      console.log(err);
    }
  };*/

  const getDiscoverShows = async () => {
    try {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=3c581ea7a292c1bd5b4acc5d7afa8699');
        const json = await response.json();
        
        // Ambil hasil film
        const movies = json.results;

        // Buat array untuk menyimpan detail film
        const movieDetailsPromises = movies.map(async (movie) => {
            const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=3c581ea7a292c1bd5b4acc5d7afa8699`);
            const movieDetails = await movieResponse.json();
            return movieDetails;
        });

        // Tunggu semua detail film selesai diambil
        const movieDetails = await Promise.all(movieDetailsPromises);

        // Set hasil ke state atau lakukan sesuatu dengan movieDetails
        setDiscoverShows(movieDetails);
        console.log(movieDetails);
    } catch (err) {
        console.log(err);
    }
};

  useEffect(() => {
   // getNowPlayingShows();
    getDiscoverShows();
   // getPopularShows();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <div>
      
      <div>
      {discoverShows.map((data) => {
        
        const releaseDate = data.release_date;
        const [ year, month, day ] = releaseDate.split('-');
        const formattedDate = `${day}/${month}/${year}`;

        return(

        <div key={data.id} className='relative flex'>

          <div className='flex justify-center'>
            <div className='h-[200px] lg:w-[950px] lg:h-[600px] bg-gray-900'></div>
            <img src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt={data.title} className='h-[600px] bg-cover'/>
           </div>
           <div className='absolute inset-0 w-screen h-[600px] bg-gradient-to-r from-gray-800 via-gray-800 to-transparent'></div>

           <div className='absolute inset-0 items-center lg:flex justify-center gap-8 text-white'>

            <div>
              <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} className='h-96 rounded-tr-lg rounded-tl-lg'/>
              <div className='bg-red-900 rounded-br-lg rounded-bl-lg p-4 text-white flex gap-2'>
                <img src={GooglePlayMovieLogo} alt="" className='h-10 w-auto'/>
                <div className='text-sm'>
                <p >Availabe to rent or buy</p>
                <p className='font-bold'>Watch now</p>
                </div>
              </div>
            </div>

            <div className=''>

              <div className='flex text-xs max-w-[55rem]'>
                <h1 className='font-black'>{data.title}</h1>
                <h1 className='opacity-80'>({data.release_date.split('-')[0]})</h1>
              </div>
              
              <div>
                <ul className='font-light flex gap-8 list-disc pl-6'>
                  <li>({formattedDate})</li>
                  <li>{data.genres.map(genre => genre.name).join(', ')}</li>
                </ul>
              </div>

              <div className='py-10'>
                <h3 className='font-bold'>Overview</h3>
                <p className='max-w-[55rem] text-sm'>{data.overview}</p>
              </div>

              <div>
              <h3 className='font-bold '>Production Company</h3>
                <p className=' max-w-[55rem]'>{data.production_companies.map(company => company.name).join(', ')}</p>
              </div>

              <div className='pt-10'>
                <a href={data.homepage}><button className='text-white bg-red-900 hover:ring-white hover:ring-2'>See homepage</button></a>
              </div>

            </div>

           </div>

        </div>
        )})}
      </div>

    </div>
  )
}

export default Home