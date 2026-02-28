import type { Category } from "@/domains/entities/category";
import type { CategoryRepository } from "@/repositories/catetory/category-repository";

export async function findCategories({
    repo,
    params: { game },
}: {
    repo: CategoryRepository;
    params: { game: string };
}): Promise<Category[]> {
    return await repo.findCategories(game);
}
