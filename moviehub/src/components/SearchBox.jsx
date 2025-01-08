import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const search = async (q) => {
    setQuery(q);
    setError(null); 
    if (q.length > 2) { 
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=3c581ea7a292c1bd5b4acc5d7afa8699&query=${encodeURIComponent(q)}`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setResults(data.results || []); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch movies. Please try again later.');
        setResults([]);
      }
    } else {
      setResults([]); 
    }
  };

  return (
    <div className="relative"> 
    <div className='flex items-center gap-2'>
      <input 
        placeholder='Find your movie...' 
        className='h-10 text-sm p-4 bg-transparent border-2 hover:border-[#8f1218] w-full rounded-full'
        onChange={({ target }) => search(target.value)}
      />
        <SearchIcon className=' text-white hover:text-[#8f1218]'/>
      
    </div>
    <div className='absolute z-50 bg-gray-800  w-[600px] shadow-md -ml-96 rounded-2xl'> {/* Position results absolutely */}
      {results.length > 0 && (
        <ul>
          {results.map(movie => (
            <li key={movie.id} className="p-2 px-4 hover:bg-gray-200 text-white hover:rounded-xl hover:text-gray-800 cursor-pointer">
              {movie.title} ({movie.release_date ? movie.release_date.split('-')[0] : 'N/A'})
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);
};

export default SearchBox;