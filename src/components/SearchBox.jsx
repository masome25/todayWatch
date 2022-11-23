

import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import Movie from './items/Movie';
import Tv from './items/Tv';
import People from './items/People';

const apiKey = 'b1b8932c621313a29fd6d714a90f292e'

function SearchBox() {
  const[txt, setTxt]=useState('')
  const[resultSearch, setResultSearch]=useState([])

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (txt) {
        const {data} = await axios.get( `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${txt}` ) 
        setResultSearch(data.results);
      } else {
        setResultSearch([]);
      }
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [txt]);

  const handleClick = () => {
    console.log(resultSearch)
  }

  function showItems(item) {
      switch (item.media_type)
      {
        case 'movie' :
           return <Movie key={item.id} item={item} />
        case 'movie' : 
           return <Tv key={item.id} item={item} />
        case 'movie' : 
           return <People key={item.id} item={item} />
      }
  }

  return (
    <>
         <i className="fa fa-search"  onClick={handleClick}></i>
         <input 
         type='search' 
         placeholder='Enter your keywords' 
         value={txt} 
         onChange={ e => setTxt(e.target.value) } 
          />
          <div className={`searchBoxInfo ${ resultSearch.length && txt ? 'show' : 'noShow' }`}>
          {
            resultSearch.map( res => {
                 return (
                    showItems(res)
                 )
            })
          }  
          </div>
    </>
  )
}

export default SearchBox