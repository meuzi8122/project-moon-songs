"use client";

import { useState } from "react";
import SongCard from "../card/song";

export default ({ songs }: SongBoardProps) => {

    const vocalSongs = songs.filter(song => song.kind === "Vocal");
    const bgmSongs = songs.filter(song => song.kind === "BGM");

    const [ isVocal, setIsVocal ] = useState<boolean>(vocalSongs.length > 0);

    const handleVocalButtonClick = () => {
        setIsVocal(() => true);  
    }

    const handleBgmButtonClick = () => {
        setIsVocal(() => false);       
    }

    return (
        <div className="flex flex-col space-y-4">

            <div className="btn-group normal-case">
                <button className={isVocal ? "btn btn-active normal-case" : "btn normal-case"} disabled={vocalSongs.length === 0} onClick={handleVocalButtonClick}>Vocal</button>
                <button className={!isVocal && bgmSongs.length > 0 ? "btn btn-active" : "btn"} disabled={bgmSongs.length === 0} onClick={handleBgmButtonClick}>BGM</button>
            </div>

            {(isVocal ? vocalSongs : bgmSongs).map(song => 
                <div key={song.id}>
                    <SongCard song={song} />
                    <div className="divider"></div> 
                </div>
            )}

        </div>
    )

}