import type { SongRepository } from "./song-repository";
import type { Song } from "@/domains/entities/song";
import { cmsClient } from "@/infrastructures/microcms-client";
import {
    parseCategory,
    type CmsCategory,
} from "@/repositories/catetory/microcms-category";

async function createCmsSongRepository(): Promise<SongRepository> {
    return {
        findSongs: async (): Promise<Song[]> => {
            return (
                await cmsClient.getAllContents<
                    Song & { category: CmsCategory }
                >({
                    endpoint: "songs",
                    queries: {
                        fields: "id,title,category.id,category.name,category.game,videoId",
                    },
                })
            ).map((song) => ({
                ...song,
                category: parseCategory(song.category),
            }));
        },
    };
}

export const microcmsSongRepository = await createCmsSongRepository();
