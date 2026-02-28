import type { Song } from "@/domains/entities/song";

export interface SongRepository {
    findSongs: () => Promise<Song[]>;
}
