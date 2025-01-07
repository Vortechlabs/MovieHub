import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
  const search = (q) => {
    console.log({q})
  }
  return (
    <div>
        <input 
        placeholder='Find your movie...' 
        className='h-10 text-sm p-4 bg-transparent border-2 hover:border-[#8f1218] w-full rounded-full'
        onChange={({target}) => search(target.value)}
        />
    </div>
    );
  };
  
  export default SearchBox;