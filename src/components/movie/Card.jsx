const Card = (props) => {
    return (
        <>
            <a target="_blank" href={`https://www.imdb.com/title/${props.movie.imdbID}/`} rel="noreferrer">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg" src={props.movie.Poster !== 'N/A' ? props.movie.Poster : 'https://placehold.co/600x400'} alt={props.movie.Title} />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.movie.Title}</h5>
                        <small className="text-gray-200">{props.movie.Year}</small>
                        <p className="mb-3 font-ormal text-gray-700 dark:text-gray-400">
                            {props.movie.Title}
                        </p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </a>
        </>
    )
}

export default Card;