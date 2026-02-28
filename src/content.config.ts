import { createMicrocmsCategoryRepository } from "./repositories/catetory/microcms-category";
import { microcmsSongRepository } from "./repositories/song/microcms-song";
import { findCategories } from "./usecases/find-categories";
import { findSongs } from "./usecases/find-songs";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

/* 
Content Layer APIを使う場合、ファイル名はcontent.config.tsで固定

従来のデータフェッチ → 同じAPIを呼び出すページが複数存在する場合、ページの数だけビルド時にAPIを叩く必要がある。
Content Layer APIを使ったデータフェッチ → 1回だけAPIを叩き結果をキャッシュに保存。各ページはキャッシュからデータを取り出す。
（カテゴリに関してはゲームごとに分けてデータフェッチした方が都合が良いので、3回呼んでる）
*/

const gameSchema = z.enum([
    "Lobotomy Corporation",
    "Library of Ruina",
    "Limbus Company",
]);

const categorySchema = z.object({
    id: z.string(),
    name: z.string(),
    game: gameSchema,
});

const categoryCollection = defineCollection({
    schema: z.object({
        id: z.string(),
        sortOrder: z.number(),
        categories: z.array(categorySchema),
    }),
    loader: async () => {
        const repo = createMicrocmsCategoryRepository();
        const [lcCategories, lorCategories, lcbCategories] = await Promise.all([
            findCategories({ repo, params: { game: gameSchema.options[0] } }),
            findCategories({ repo, params: { game: gameSchema.options[1] } }),
            findCategories({ repo, params: { game: gameSchema.options[2] } }),
        ]);
        // Layer APIだと順番が保証されないためsortOrderを設定（Promise.all自体は順番は保証される）
        return [
            {
                id: gameSchema.options[0],
                sortOrder: 1,
                categories: lcCategories,
            },
            {
                id: gameSchema.options[1],
                sortOrder: 2,
                categories: lorCategories,
            },
            {
                id: gameSchema.options[2],
                sortOrder: 3,
                categories: lcbCategories,
            },
        ];
    },
});

const songCollection = defineCollection({
    schema: z.object({
        id: z.string(),
        title: z.string(),
        category: categorySchema,
        videoId: z.string(),
    }),
    loader: async () => {
        return await findSongs({ repo: microcmsSongRepository });
    },
});

export const collections = {
    categories: categoryCollection,
    songs: songCollection,
};
