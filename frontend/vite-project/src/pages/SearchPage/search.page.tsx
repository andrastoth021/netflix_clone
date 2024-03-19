import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import MovieCover from "@/components/movie-cover.tsx";
import { axiosConfigWithAuth } from "@/config/axios.config.ts";
import { useState } from "react";
import { Link } from "react-router-dom";

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

export default function SearchPage() {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const fetchData = async (serachTerm: string) => {
        try {
            const { data } = await axiosConfigWithAuth.get<dataResponse>(`/api/movie/search/${serachTerm}`);
            console.log(data.movies);

            // @ts-ignore
            setMovies(data.movies);
        } catch (error) {
            console.error(error);
        }
    }

    const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchData(query);
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center p-10">
                <form className="flex w-full max-w-sm items-center space-x-2"
                    onSubmit={(e) => handleClick(e)}
                >
                    <Input type="search" placeholder="Type in a movie title"
                           value={query}
                           onChange={(e) => setQuery(e.target.value)} />
                    <Button type="submit">Search</Button>
                </form>
                <Separator className="m-10" />
                <div
                    className="grid md:grid-flow-col md:justify-start space-x-8 space-y-8 min-h-[140px] w-full place-items-center md:place-items-start overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                    {movies.length < 1 ? <></> : movies.map((movie: Movie) => {
                        return (
                            <Link to={`/movie/details/${movie.uuid}`}>
                                <MovieCover key={movie.uuid} poster={movie.posterSrc}/>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    );
}
