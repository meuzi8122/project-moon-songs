"use client";

import { useState } from "react";
import SongCard from "../card/song";

export default ({ songs }: { songs: Song[] }) => {

    const [ activatedKinds, setActivatedKinds ] = useState<Record<Kind, boolean>>({
        vocal: true, bgm: true
    })

    return (
        <>
            {songs.map(song => 
                <div key={song.id}>
                    <SongCard song={song} />
                    <div className="divider"></div> 
                </div>
            )}
        </>
    )

}