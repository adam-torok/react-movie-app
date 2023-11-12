import { useEffect } from "react";
import Header from './components/nav/Header'
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
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </>
    );
}

export default App;