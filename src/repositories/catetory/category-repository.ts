import type { Category } from "../../domains/entities/category";

export interface CategoryRepository {
    findCategories: (game: string) => Promise<Category[]>;
}