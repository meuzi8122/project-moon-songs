import { SongService } from "../../../cms/song";
import SongBoard from "../../../components/board/song";
import { GAMES } from "../../../constants/domain";

export default async ({ params }: SongPageProps) => {

    const { gameId } = params;
    const game = GAMES[gameId];
    const songs = await SongService.findSongs(game);

    return (
        <div className="mt-12">
            <SongBoard game={game} songs={songs} />
        </div>
    )

}

export const generateStaticParams = async () => {
    return Object.keys(GAMES).map(gameId => ({ gameId } ));
}