import { useEffect, useState } from "react";
import Header from './components/nav/Header';
import Card from './components/movie/Card';

import './app.css';

const App = () => {
    const API_URL = import.meta.env.VITE_MOVIE_APP_URL;
    const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${title}`);
        const data = await response.json();
    }

    useEffect(() => {
        searchMovies('Spiderman');
    });

    return (
        <>
            <Header />
            <div className="mx-auto flex max-w-7xl items-cente flex-col justify-between p-6 lg:px-8">
                <h1 className="text-3xl font-bold text-center">🍿 React Movie App</h1>

                <div>
                    <input
                        onChange={(e) => {
                            searchMovies(e);
                        }}
                        placeholder="Search for movies"
                        type="text" />
                </div>

                <div className="cards--container">
                    <Card />
                </div>
            </div>
        </>
    );
}

export default App;