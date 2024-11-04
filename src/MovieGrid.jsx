
import MovieCard from "./MovieCard";

function MovieGrid()
{
   const Movies=[{title:'RRR',hero:'RamCharan',heroine:'Aliabhatt'},
                {title:'Bahubali',hero:'Prabhas',heroine:'Anushka'},
                {title:'Devara',hero:'NTR',heroine:'Jahnavi'},
                {title:'Salaar',hero:'Prabhas',heroine:'Sruthihasan'},
                {title:'KGF',hero:'Yash',heroine:'Riyahbgg'}
            ];
                
const movies =Movies.map((movie,index)=>(<li key={index}>title:{movie.title} Hero:{movie.hero} Heroine:{movie.heroine} </li>))
    return(
        <>
         <MovieCard MovieListObj={movies}/>

        </>
    )
}
export default MovieGrid;