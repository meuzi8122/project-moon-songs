import type { RawSong } from "../../domains/entities/song";

export interface SongRepository {
    findSongs: () => Promise<RawSong[]>;
}
