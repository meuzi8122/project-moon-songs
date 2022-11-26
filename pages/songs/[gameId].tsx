import type { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import { findSongs } from "../../cms/client";
import SongCard from "../../components/card/song";
import { GAMES } from "../../constants/domain";

export default ({ game, songs }: SongPageProps) => {

    return (
        <div className="flex flex-col space-y-5">
            {game}

            {songs.map(song => 
                <>
                    <SongCard song={song} />
                    <div className="divider"></div> 
                </>
            )}

        </div>
    )

}

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: Object.keys(GAMES).map(gameId => ({ params: { gameId } })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const game = GAMES[(params as ParsedUrlQuery).gameId as string];

    return {
        props: {
            game, songs: await findSongs(game)
        }
    }

}