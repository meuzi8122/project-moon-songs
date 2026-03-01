/// <reference types="youtube" />

export function createPlayer(params: {
    embedElementId: string;
    onReady: ({ target }: { target: YT.Player }) => void;
    onStateChange: (event: YT.OnStateChangeEvent) => void;
}): YT.Player {
    return new YT.Player(params.embedElementId, {
        width: "0%",
        height: "0",
        playerVars: {
            autoplay: 1,
        },
        events: {
            onReady: params.onReady,
            onStateChange: params.onStateChange,
        },
    });
}
