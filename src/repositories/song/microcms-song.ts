import type { Game, RawSong } from "../../domains/entities/song";
import { cmsClient } from "../../infrastructures/microcms-client";
import type { SongRepository } from "./song-repository";

async function createCmsSongRepository(): Promise<SongRepository> {
    return {
        findSongs: async (): Promise<RawSong[]> => {
            const songs = await cmsClient.getAllContents<RawSong & { game: string[], tag: string[] }>({
                endpoint: "songs",
                queries: {
                    fields: "id,title,game,tag,videoId",
                },
            });
            // 「ゲームとタグが配列なのを文字列に直す」のはMicroCMS特有の関心ごとなので、エンティティの処理には入れない
            return songs.map(song => ({
                ...song,
                game: song.game[0] as Game,
                tag: song.tag[0],
            }));
        },
    };
}

export const microcmsSongRepository = await createCmsSongRepository();
