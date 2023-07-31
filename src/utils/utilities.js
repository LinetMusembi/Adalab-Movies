const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN_URL = process.env.REACT_APP_ACCESS_TOKEN
export const getMovies = async()=>{
    try{
        const response = await fetch(`${BASE_URL}/3/movie/popular`,{
            method: 'GET',
            headers:{
                Authorization:`Bearer ${ACCESS_TOKEN_URL}`,
                'content-Type': 'application/json'
            }
        })
        const result = await response.json();
        return result;
    }
    catch(error){
        return error.message;
    }
}
export const getSlider= async()=>{
    try{
        const response = await fetch(`${BASE_URL}/3/movie/now_playing`,{
            method: 'GET',
            headers:{
                Authorization:`Bearer ${ACCESS_TOKEN_URL}`,
                'content-Type': 'application/json'
            }
        })
        const result = await response.json();
        return result;
    }
    catch(error){
        return error.message;
    }
}
export const searchMovies = async (query) => {
    try {
      const response = await fetch(
        `${BASE_URL}/3/search/movie?query=${query}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN_URL}`
          }
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return error.message;
    }
  };
  export const getMovieDetails = async (movieId) => {
    try {
      const response = await fetch(`${BASE_URL}/3/movie/${movieId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN_URL}`,
        },
      });
      const result = await response.json();
      return result;
    } catch (error) {
      return error.message;
    }
  };