type LayoutProps = {
    children: React.ReactElement;
}

type SongPageProps = {
    params: { 
        gameId: string;
    }
}

type SongCardProps = {
    song: Song;
}

type SongBoardProps = { 
    game: Game;
    songs: Song[];
}
