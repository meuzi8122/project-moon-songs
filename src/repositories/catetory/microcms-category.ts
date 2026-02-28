import type { CategoryRepository } from "./category-repository";
import type { Category, Game } from "@/domains/entities/category";
import { cmsClient } from "@/infrastructures/microcms-client";

export type CmsCategory = Category & { game: Game[] };

export function createMicrocmsCategoryRepository(): CategoryRepository {
    return {
        findCategories: async (game: string) => {
            const categories = await cmsClient.getAllContents<CmsCategory>({
                endpoint: "categories",
                queries: {
                    fields: "id,name,game",
                    filters: `game[contains]${game}`,
                    orders: "sortOrder",
                },
            });
            // 「ゲームが配列なのを文字列に直す」のはMicroCMS特有の関心ごとなので、エンティティの処理には入れない
            return categories.map((category) => parseCategory(category));
        },
    };
}

export const parseCategory = (raw: CmsCategory) => {
    return {
        ...raw,
        game: raw.game[0] as Game,
    };
};
