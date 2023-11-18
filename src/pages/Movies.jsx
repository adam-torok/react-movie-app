import { useState } from "react";
import Card from '../components/movie/Card';


export default function Movies() {
    const API_URL = import.meta.env.VITE_MOVIE_APP_URL;
    const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${title}&plot=full`);
        const data = await response.json();
        if(data.Search){
            setMovies(data.Search);
        }else{
            setMovies([]);
        }
    }

    return (
        <div className="mx-auto flex max-w-7xl pt-20 items-center flex-col justify-between p-6 lg:px-8">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative mt-5 mb-5 w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input
                    onChange={(e) => { setSearch(e.target.value) }}
                    value={search}
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                <button
                    onClick={() => { searchMovies(search) }}
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>

            {movies.length > 0 ? (
                <div className="cards--container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

                    {movies.map((movie) => (
                        <Card key={movie.imdbID} movie={movie} />
                    ))}

                </div>
            ) : (
                <p>
                    <iframe className="landing--lottie" src="https://lottie.host/?file=abd99459-b39f-42b1-bf8c-a37769e16239/CCrowXnFck.json"></iframe>
                </p>
            )}
        </div>
    )
}