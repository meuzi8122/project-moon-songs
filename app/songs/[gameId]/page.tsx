import { use } from "react";
import { SongService } from "../../../cms/song";
import SongBoard from "../../../components/board/song";
import SongCard from "../../../components/card/song";
import { GAMES } from "../../../constants/domain";

export default async ({ params }: { params: { gameId: string } }) => {

    const { gameId } = params;
    //const songs = use(SongService.findSongs(GAMES[gameId]));
    const songs = await SongService.findSongs(GAMES[gameId]);

    return (
        <div className="flex flex-col space-y-5 mt-5 max-w-3xl">

            {GAMES[gameId]}

            <SongBoard songs={songs} />

        </div>
    )

}

export const generateStaticParams = async () => {
    return Object.keys(GAMES).map(gameId => ({ gameId } ));
}