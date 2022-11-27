export class SongService {

    private static endpoint = `https://${process.env.SERVICE_DOMAIN}.microcms.io/api/v1/songs`;

    private static parseSong(content: any): Song {
        return {
            id: content.id,
            title: content.title,
            game: content.game,
            kind: content.kind,
            youtubeUrl: content.youtube,
            artworkUrl: `${content.artwork.url}?fit=crop&w=400&h=240`
        }
    }

    static async findSongs(game: Game): Promise<Song[]> {

        const res = await fetch(`${SongService.endpoint}?fields=id,title,game,kind,artwork,youtube&filters=game[equals]${game}&limit=20`, {
            headers: {
                "X-MICROCMS-API-KEY": process.env.API_KEY as string,
            },
            cache: "force-cache"
        });

        return (await res.json()).contents.map((content: any) => SongService.parseSong(content));

    }

}