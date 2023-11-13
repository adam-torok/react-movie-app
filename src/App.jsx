import { useEffect, useState } from "react";
import Header from './components/nav/Header';
import Card from './components/movie/Card';
import WelcomeDialog from './components/common/Dialog';

import './app.css';

const App = () => {
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

    useEffect(() => {

    }, []);

    return (
        <>
            <Header />
            <WelcomeDialog />
            <div className="mx-auto flex max-w-7xl items-center flex-col justify-between p-6 lg:px-8">
                <div className="mb-6 w-full flex">
                    <input
                        onChange={(e) => { setSearch(e.target.value) }}
                        value={search}
                        type="text"
                        placeholder='Search in movies'
                        className="block me-2 w-full p-5 text-gray-900 border border-gray-300 rounded-lg sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-500" />
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => { searchMovies(search) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </div>

                {movies.length > 0 ? (
                    <div className="cards--container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

                        {movies.map((movie) => (
                            <Card key={movie.imdbID} movie={movie} />
                        ))}

                    </div>
                ) : (
                    <p>🍿 No movies found </p>
                )}
            </div>
        </>
    );
}

export default App;