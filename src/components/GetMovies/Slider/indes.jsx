import React,{useState,useEffect} from "react";
import {getMovies} from "../../utils/utilities";
import './style.css';
import ImageContainer from "../../atoms/ImageContainer";
import MovieDetails from "./MovieDetails";
import Categories from "./MovieCategory/category";



const GetMovies = ({searchResults}) => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedMovie, setSelectedMovie] = useState(null); 

//   useEffect(() => {
//     (async () => {
//       setLoading(true);
//       const movies = await getMovies();
//       console.log({ movies });
//       setLoading(false);
//       setMovies(movies.results);
//     })();
//   }, []);

//   const handleMovieClick = (movieId) => {
//     setSelectedMovie(movieId);
//   };

//   const handleCloseMovieDetails = () => {
//     setSelectedMovie(null);
//   };

//   if (loading) {
//     return <h1>Loading Movies...</h1>;
//   }

//   return (
//     <div>
//     <div className="container">
//       {movies &&
//         !loading &&
//         movies.length > 0 &&
//         movies.map((item) => (
//           <ImageContainer
//             key={item.id} 
//             props={item}
//             onClick={() => handleMovieClick(item.id)}
//           />
//         ))}
//       {movies && !loading && movies.length === 0 && <h1>No movies</h1>}
      
//     </div>
//     {selectedMovie && (
//         <MovieDetails movieId={selectedMovie} onClose={handleCloseMovieDetails} />
//       )}
//     </div>
//   );
const [movies, setMovies] = useState([]);
const [selectedCategory, setSelectedCategory] = useState("all");
const [selectedCategoryName, setSelectedCategoryName] = useState("All");
const [selectedMovie, setSelectedMovie] = useState(null);

useEffect(() => {
  (async () => {
    const movies = await getMovies();
    setMovies(movies.results);
  })();
}, []);
const handleCategoryChange = (categoryId, categoryName) => {
  setSelectedCategory(categoryId);
  setSelectedCategoryName(categoryName);
};
const handleMovieClick = (movieId) => {
  setSelectedMovie(movieId);
};
const handleCloseMovieDetails = () => {
  setSelectedMovie(null);
};
const filteredMovies =
  selectedCategory === "all"
    ? movies
    : movies.filter((movie) => movie.genre_ids.includes(parseInt(selectedCategory)));
const moviesToDisplay = searchResults && searchResults.length > 0 ? searchResults : filteredMovies;
return (
  <div>
    {selectedCategoryName !== "All" && <h1>{selectedCategoryName} Movies</h1>}
    <Categories
      selectedCategory={selectedCategory}
      handleCategoryChange={handleCategoryChange}
    />
    <div className="container">
      {moviesToDisplay.map((item) => (
        <ImageContainer
          props={item}
          key={item.id}
          onClick={() => handleMovieClick(item.id)}
        />
      ))}
    </div>
    {selectedMovie && (
      <MovieDetails movieId={selectedMovie} onClose={handleCloseMovieDetails} />
    )}
  </div>
);
};

export default GetMovies;
