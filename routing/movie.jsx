import { useState, useEffect } from "react";
import axios from "axios";




export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);

//   useEffect(() => {
//     getData();
//   }, []);


//   const getData = async () => {
//     const response = await Axios.get(
      
//     );
//     setMovies(response.data.results, options);
//     setLoader(false);
//     console.log(movies);
//     return response.data.results;
//   };
const options = {
  method: 'GET',
  url: 'https://imdb236.p.rapidapi.com/imdb/most-popular-movies',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
    'x-rapidapi-host': 'imdb236.p.rapidapi.com'
  }
};
console.log(import.meta.env.VITE_RAPID_API_KEY)


const getData = async () => {
try {
	const response = await axios.request(options);
	console.log(response.data);
  setMovies(response.data);
} catch (error) {
	console.error(error);
}
}
useEffect(() => {
  getData();
}, []);
// Calculate the current movies to display
const indexOfLastMovie = currentPage * itemsPerPage;
const indexOfFirstMovie = indexOfLastMovie - itemsPerPage;
const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
 // Change page
 const paginate = (pageNumber) => setCurrentPage(pageNumber);

 // Calculate total pages
 const totalPages = Math.ceil(movies.length / itemsPerPage);

  return (
    <>
      <div className="movies-container">
        <h1>Movies</h1>
        
      <div className="movies-grid">
          {currentMovies.map((item) => (
            <div key={item.id}>
              <div>
                <img src={item.primaryImage} alt={item.title} />
                <div className="desc">
                  <p>{item.description}</p>
                  <div><a href={item.url}>Link</a></div>
                </div>
              </div>
            </div>
        ))}
</div>
<div className="pag-section">
<div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button className="pagination-button" key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
        </div>
      </div>

    </>
  );
};
