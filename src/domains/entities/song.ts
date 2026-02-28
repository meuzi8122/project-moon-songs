import type { Category } from "./category";

export interface Song {
    id: string;
    title: string;
    category: Category;
    videoId: string;
}

export interface SongWithStartSeconds extends Song {
    startSeconds: number;
}

/*
default: 120 x 90
mqdefault: 320 × 180
hqdefault: 480 × 360
sddefault: 640 × 480
maxresdefault: 1280 × 720
*/
export function createThumbnailUrl(song: Song): string {
    return `https://img.youtube.com/vi/${song.videoId}/mqdefault.jpg`;
}

export function createVideoUrl(song: SongWithStartSeconds) {
    return `https://www.youtube.com/watch?v=${song.videoId}&t=${song.startSeconds}`;
}

/*
将来的にはチャプターごとにSongレコードをDBで管理するようにしたい
*/
export const createSongWithStartSeconds = (
    song: Song,
): SongWithStartSeconds[] => {
    if (song.id === "uym96o9a-a") {
        return [
            { ...song, title: `通常戦闘`, startSeconds: 0 },
            {
                ...song,
                title: `幻想体再戦`,
                startSeconds: 199,
            },
            {
                ...song,
                title: `小指-子方 レン`,
                startSeconds: 395,
            },
            {
                ...song,
                title: `親指-子方 ルチオ`,
                startSeconds: 575,
            },
            {
                ...song,
                title: `親指-親方 ヴァレンチーナ`,
                startSeconds: 667,
            },
            {
                ...song,
                title: `人差し指-子方 ソラ`,
                startSeconds: 975,
            },
            {
                ...song,
                title: `乱入 ベスパ・クラブロ`,
                startSeconds: 1065,
            },
            {
                ...song,
                title: `中指-親方 マティアス / 中指-子方 キラ`,
                startSeconds: 1339,
            },
            {
                ...song,
                title: `薬指-子方 アルビナ&ファシア`,
                startSeconds: 1719,
            },
            {
                ...song,
                title: `薬指-親方 カリスト`,
                startSeconds: 1804,
            },
            {
                ...song,
                title: `小指-親方 塩見ヨル`,
                startSeconds: 2094,
            },
            {
                ...song,
                title: `蜚蠊の皇帝`,
                startSeconds: 2479,
            },
            {
                ...song,
                title: `とあるシンクレア`,
                startSeconds: 2882,
            },
            {
                ...song,
                title: `小指-親方 ？？？`,
                startSeconds: 3341,
            },
            { ...song, title: `無我良秀`, startSeconds: 3816 },
        ];
    }

    return [{ ...song, startSeconds: 0 }];
};
