import { Fragment } from "react";
import { SongService } from "../../../cms/song";
import SongCard from "../../../components/card/song";
import { GAMES } from "../../../constants/domain";

export default async ({ params }: SongPageProps) => {

    const { gameId } = params;
    const game = GAMES[gameId];
    const songs = await SongService.findSongs(game);

    return (
        <div className="flex flex-wrap flex-col content-center mt-8">

            <h1 className="text-xl font-semibold text-center mb-8">{game}</h1>

            {songs.map(song => 
                <Fragment key={song.id}>
                    <SongCard song={song} />
                    <div className="divider"></div> 
                </Fragment>
            )}

        </div>
    )

}

export const generateStaticParams = async () => {
    return Object.keys(GAMES).map(gameId => ({ gameId } ));
}