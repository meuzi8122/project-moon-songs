import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN as string,
    apiKey: process.env.API_KEY as string
});

export const findSongs = async (game: Game): Promise<Song[]> => {

    return (await client.get({
        endpoint: "songs",
        queries: {
            fields: "id,title,game,kind,youtube,artwork",
            filters: `game[equals]${game}`,
            limit: 50
        }
    })).contents.map((content: any) => ({
        id: content.id,
        title: content.title,
        game: content.game,
        kind: content.kind,
        youtubeUrl: content.youtube,
        artworkUrl: `${content.artwork.url}?fit=crop&w=400&h=200`
    }));

}