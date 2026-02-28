import { type Song } from "@/domains/entities/song";
import type { SongRepository } from "@/repositories/song/song-repository";

/* 
リポジトリのインターフェースを指定することで、ユースケースはリポジトリの具体を知らずに済む
→ MicroCMS向けリポジトリからPostgres向けリポジトリに変わっても、ユースケース自体は修正する必要がなくなる（ユースケースの呼び出しで渡すリポジトリを変える）
*/
export async function findSongs({
    repo,
}: {
    repo: SongRepository;
}): Promise<Song[]> {
    return await repo.findSongs();
}
