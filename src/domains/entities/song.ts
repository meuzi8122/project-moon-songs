import type { Category } from "./category";

export interface Song {
    id: string;
    title: string;
    category: Category;
    videoId: string;
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
