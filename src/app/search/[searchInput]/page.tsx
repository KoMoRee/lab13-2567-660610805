"use client";

import { movieDB } from "@lib/movieDB";
import { movieIdPageParams, searchInputParams } from "@lib/types";
import { MovieRow } from "@components/MovieRow";



export default function SearchResultPage( {params}:searchInputParams ) {
  //tip1 : before filtering movie, replace all "%20" with " " (space) in the input
  
  const processedSearchInput = params.searchInput.replaceAll('%20',' ').toLocaleLowerCase();

  // if(!processedSearchInput) {
  //   return <p className='text-center'>Movie is not found !!!</p>
  // }
  

  
  /*
  tip2 : Use "includes" string method to check substring
  Example : "ABC".includes("AB") -> return true
  */
  const filteredMovies = movieDB.filter((movie) => 
    movie.title.toLocaleLowerCase().includes(processedSearchInput)
  );
  
  /*
  tip3 : To implement case insensitive searching, use "toLocaleLowerCase" string method
  to convert movie title and searchInput to lower case 
  */

  
  
   

  // 
    
  // );

  return (
    <div>
      
      <p className="fw-bold fs-4 text-center my-0">
        Searching &quot; {processedSearchInput} &quot;
      </p>
      <p className="fw-bold fs-4 text-center">Found {filteredMovies.length} result(s)</p>
      {filteredMovies.map( (movie, i)=> <MovieRow key={movie.id} {...movie} number={i+1}/>)}
    </div>
  );
}
