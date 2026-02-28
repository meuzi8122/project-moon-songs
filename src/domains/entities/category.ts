export type Game =
    | "Lobotomy Corporation"
    | "Library of Ruina"
    | "Limbus Company";

export interface Category {
    id: string;
    name: string;
    game: Game;
}