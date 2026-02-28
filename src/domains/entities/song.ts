import type { Category } from "./category";

export interface Song {
    id: string;
    title: string;
    category: Category;
    videoUrl: string;
    thumbnailUrl: string;
}

export type RawSong = Omit<Song, "videoUrl" | "thumbnailUrl"> & {
    videoId: string;
};

/*
default: 120 x 90
mqdefault: 320 × 180
hqdefault: 480 × 360
sddefault: 640 × 480
maxresdefault: 1280 × 720
*/
export function createSong(song: RawSong): Song {
    return {
        ...song,
        videoUrl: `https://www.youtube.com/embed/${song.videoId}`,
        thumbnailUrl: `https://img.youtube.com/vi/${song.videoId}/mqdefault.jpg`,
    };
}
