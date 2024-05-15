import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import MovieCover from "@/components/movie-cover.tsx";
import { axiosConfigWithAuth } from "@/config/axios.config.ts";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FilterBarComponent } from '@/components/filter';

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

const thisYear: number = new Date().getFullYear();
const ry: {min: number, max: number} = {
    // Release Year
    min: 1888,
    max: thisYear,
};
const rt: {min: number, max: number} = {
    // Runtime
    min: 1800,
    max: 10000,
};
const pegi: {min: number, max: number} = {
    min: 0,
    max: 25,
};

export default function SearchPage() {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const [releaseYearFrom, setReleaseYearFrom] = useState(ry.min);
    const [releaseYearTo, setReleaseYearTo] = useState(ry.max);
    const [runtimeFrom, setRuntimeFrom] = useState(rt.min);
    const [runtimeTo, setRuntimeTo] = useState(rt.max);
    const [pegiFrom, setPegiFrom] = useState(pegi.min);
    const [pegiTo, setPegiTo] = useState(pegi.max);

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

    const filterFetch = async () => {
        try {
            const params = new URLSearchParams();
            params.append("releaseFrom", releaseYearFrom.toString());
            params.append("releaseTo", releaseYearTo.toString());
            params.append("runtimeFrom", runtimeFrom.toString());
            params.append("runtimeTo", runtimeTo.toString());
            params.append("pegiFrom", pegiFrom.toString());
            params.append("pegiTo", pegiTo.toString());
            const { data } = await axiosConfigWithAuth.get<dataResponse>(`/api/movie/filter?${params}`);
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
                <form onSubmit={(e) => handleClick(e)}
                      className="flex w-full max-w-sm items-center space-x-2">
                        <Input type="search" placeholder="Type in a movie title"
                               value={query}
                               onChange={(e) => setQuery(e.target.value)} />
                        <Button type="submit">Search</Button>
                </form>
                <Separator className="mt-10 mb-2" />
                <FilterBarComponent
                    getData={filterFetch}
                    releaseYearFrom={releaseYearFrom} releaseYearTo={releaseYearTo}
                    runtimeFrom={runtimeFrom} runtimeTo={runtimeTo}
                    pegiFrom={pegiFrom} pegiTo={pegiTo}
                    setReleaseYearFrom={setReleaseYearFrom} setReleaseYearTo={setReleaseYearTo}
                    setRuntimeFrom={setRuntimeFrom} setRuntimeTo={setRuntimeTo}
                    setPegiFrom={setPegiFrom} setPegiTo={setPegiTo}
                    ry={ry} rt={rt} pegi={pegi}
                />
                <div
                    className="grid md:grid-flow-col md:justify-start space-x-8 space-y-8 min-h-[140px] w-full place-items-center md:place-items-start overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                    {movies.length < 1 ? <></> : movies.map((movie: Movie) => {
                        return (
                            <Link key={movie.uuid} to={`/movie/details/${movie.uuid}`}>
                                <MovieCover key={movie.uuid} poster={movie.posterSrc}/>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    );
}
