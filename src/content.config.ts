import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { findSongs } from "./usecases/find-songs";
import { microcmsSongRepository } from "./repositories/song/microcms-song";

/* 
Content Layer APIを使う場合、ファイル名はcontent.config.tsで固定

従来のデータフェッチ → 同じAPIを呼び出すページが複数存在する場合、ページの数だけビルド時にAPIを叩く必要がある。
Content Layer APIを使ったデータフェッチ → 1回だけAPIを叩き結果をキャッシュに保存。各ページはキャッシュからデータを取り出す。
*/

export const collections = {
    songs: defineCollection({
        schema: z.object({
            id: z.string(),
            title: z.string(),
            game: z.enum([
                "Lobotomy Corporation",
                "Library of Ruina",
                "Limbus Company",
            ]),
            tag: z.string(),
            videoUrl: z.string(),
            thumbnailUrl: z.string(),
        }),
        loader: async () => {
            return await findSongs({ repo: microcmsSongRepository });
        },
    }),
};
