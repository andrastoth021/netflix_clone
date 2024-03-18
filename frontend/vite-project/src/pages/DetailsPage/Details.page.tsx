import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { axiosConfigWithAuth } from "@/config/axios.config.ts";
import {
    Alert,
    AlertDescription,
    AlertTitle
} from "@/components/ui/alert.tsx";
import { AlertCircle, Play } from "lucide-react";
import Loading from "@/components/loading";
import { CardTitle } from "@/components/ui/card.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import Plyr from 'plyr-react';
import "plyr/dist/plyr.css";

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
    backgroundSrc: string,
    videoSrc: string
}

const DetailsPage = () => {
    const { id } = useParams();
    const { data, isLoading, isError, error } =
        useQuery<Movie>({
            queryKey: [`${id}`],
            queryFn: async () => {
                const { data } = await axiosConfigWithAuth.get(`/api/movie/details/${id}`);

                return data;
            }
        });

    if (isLoading) return <Loading />;
    if (isError) {
        console.log(error)
        return (
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle className={'text-xl'}>Failed to load content!</AlertTitle>
                <AlertDescription className={"text-l"}>
                    <p>More detail:</p>
                    <p>{error.message}</p>
                </AlertDescription>
            </Alert>
        );
    }

    const convertSeconds = (seconds: number): string => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);

        if (hours < 1 && minutes > 0) return `${minutes} minutes`;
        else if (minutes < 1 && hours > 0) return `${hours} hours`;
        else return `${hours} hours ${minutes} minutes`;
    }

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <>
            <div className="relative h-[66vh] bg-cover bg-center"
                 style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.125), rgba(0, 0, 0, 0.77)), url(${data && data.backgroundSrc})`}}
            >
                <div className="absolute bottom-0 left-0 p-4">
                    <div className="space-y-1">
                        <CardTitle className="text-white mb-2">{data && data.title}</CardTitle>
                        <div className="space-x-1">
                            { data && data.categoryNames.map((category) => {
                                // TODO: link route
                                return (
                                    <Link to={""}>
                                        <Badge variant="outline" className="text-gray-300 border-gray-500 hover:backdrop-blur">{category}</Badge>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="flex flex-col space-y-1">
                                <span className="text-gray-400">{data && data.description}</span>
                            </p>
                        </div>
                    </div>
                    <div className="space-y-1 mt-2">
                        <Button variant="link"><Play className="text-white"/></Button>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 p-4">
                    <Separator className="my-2 bg-gray-500"/>
                    <div className="flex h-5 items-center space-x-4 text-sm text-white">
                        <div>{data && data.releaseYear}</div>
                        <Separator className={"bg-gray-500"} orientation="vertical"/>
                        <div>{data && data.pegi}+</div>
                        <Separator className={"bg-gray-500"} orientation="vertical"/>
                        <div>{data && convertSeconds(data.runtime)}</div>
                    </div>
                </div>
            </div>
            <div className="p-10 flex flex-col justify-center items-center">
                <Plyr
                    source={{
                        type: "video",
                        sources: [
                            {
                                // @ts-ignore
                                src: `${data.videoSrc}`,
                                type: "video/mp4",
                            },
                        ],
                    }}
                    options={{
                        controls: [
                            "play-large",
                            "play",
                            // "rewind",
                            // "fast-forward",
                            "progress",
                            "current-time",
                            "mute",
                            "volume",
                            "captions",
                            "settings",
                            // "pip",
                            "fullscreen"
                        ],
                        captions: { active: true, language: "auto", update: true },
                        previewThumbnails: { enabled: false, src: "" }
                    }}

                />
            </div>
        </>
    )
};

export default DetailsPage;
