import { cmsClient } from "../../infrastructures/microcms-client";
import type { CategoryRepository } from "./category-repository";

export function createMicrocmsCategoryRepository(): CategoryRepository {
    return {
        findCategories: async (game: string) => {
            const categories = await cmsClient.getAllContents({
                endpoint: "categories",
                queries: {
                    fields: "id,name,game",
                    filters: `game[contains]${game}`,
                    orders: "sortOrder"
                },
            });
            // 「ゲームが配列なのを文字列に直す」のはMicroCMS特有の関心ごとなので、エンティティの処理には入れない
            return categories.map((category) => ({
                ...category,
                game: category.game[0] as string,
            }));  
        }
    }
}