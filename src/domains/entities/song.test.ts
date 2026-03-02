import { createThumbnailUrl } from "./song";
import { describe, it, expect } from "vitest";

describe("songエンティティのロジック", () => {
    it("ビデオIDをもとにサムネイルURLを発行できること", () => {
        expect(
            createThumbnailUrl({
                id: "dvy47o1",
                title: "test-title",
                category: {
                    id: "1",
                    name: "test-category",
                    game: "Lobotomy Corporation",
                },
                videoId: "kv8xg12",
            }),
        ).toBe("https://img.youtube.com/vi/kv8xg12/mqdefault.jpg");
    });
});
