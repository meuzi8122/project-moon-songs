type Game = "Lobotomy Corporation" | "Library of Ruina" | "Limbus Company";

type Kind = "bgm" | "vocal";

type Song = {
    id: string;
    title: string;
    game: Game;
    kind: Kind;
    youtubeUrl: string;
    artworkUrl: string;
}