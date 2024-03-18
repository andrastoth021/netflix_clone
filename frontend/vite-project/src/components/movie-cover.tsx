interface props {
    poster: string;
}

const MovieCover = ({ poster }: props) => {

    return (
        <>
            <img
                className="object-cover object-center rounded-lg shadow-black shadow-lg w-56 h-auto shadow-blue-gray-900/50 transform hover:scale-105 transition duration-200"
                src={poster}
                alt="cover"
            />
        </>
    );
}

export default MovieCover;
