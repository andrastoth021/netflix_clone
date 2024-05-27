import {axiosConfigWithAuth} from "@/config/axios.config.ts";
import {useEffect, useState} from "react";
import Loading from "@/components/loading";
import {Link} from "react-router-dom";
import MovieCover from "@/components/movie-cover.tsx";

interface dataResponse {
    movies: Movie[]
}

interface Movie {
    uuid: string,
    categoryNames: string[],
    title: string,
    description: string,
    shortDescription: string,
    releaseYear: number,
    pegi: number,
    runtime: number,
    posterSrc: string,
    backgroundSrc: string
}

const PopularPage = () => {
    const [movies, setMovies] = useState([]);

    const fetchData = async () => {
        try {
            const { data } = await axiosConfigWithAuth.get<dataResponse>('/api/movie/popular');
            console.log(data.movies);

            // TODO: remove ts-ignore and fix the issue
            // @ts-ignore
            setMovies(data.movies);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div
                className="grid md:grid-flow-col md:justify-start space-x-8 space-y-8 min-h-[140px] w-full place-items-center md:place-items-start overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                {movies.length < 1 && <Loading/>}
                {movies && movies.map((movie: Movie) => {
                        return (
                            <Link to={`/movie/details/${movie.uuid}`}>
                                <MovieCover key={movie.uuid} poster={movie.posterSrc}/>
                            </Link>
                        )
                    }
                )}
            </div>
        </>
    )
}

export default PopularPage;
