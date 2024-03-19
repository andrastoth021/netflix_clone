import MovieCover from '@/components/movie-cover.tsx';
import {
    useEffect,
    useState
} from "react";
import { axiosConfigWithAuth } from "@/config/axios.config.ts";
import { Link } from "react-router-dom";
import Loading from "@/components/loading";

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

const ExplorePage = () => {
    const [movies, setMovies] = useState([]);

    const fetchData = async () => {
        try {
            const { data } = await axiosConfigWithAuth.get<dataResponse>('/api/movie/all');
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
                { movies.length < 1 && <Loading /> }
                { movies && movies.map((movie: Movie) => {
                    return (
                        <Link to={`/movie/details/${movie.uuid}`}>
                            <MovieCover key={movie.uuid} poster={movie.posterSrc} />
                        </Link>
                    )
                }
                )}
            </div>
        </>
    )
};

export default ExplorePage;
