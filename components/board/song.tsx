"use client";

import { useState } from "react";
import SongCard from "../card/song";

export default ({ game, songs }: SongBoardProps) => {

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
        <div className="flex flex-wrap flex-col content-center space-y-4">

            <div className="flex space-x-5 justify-center mb-7">

                <h1 className="text-3xl font-semibold">{game}</h1>

                <div className="btn-group normal-case">
                    <button className={isVocal ? "btn btn-active normal-case" : "btn normal-case"} disabled={vocalSongs.length === 0} onClick={handleVocalButtonClick}>Vocal</button>
                    <button className={!isVocal && bgmSongs.length > 0 ? "btn btn-active" : "btn"} disabled={bgmSongs.length === 0} onClick={handleBgmButtonClick}>BGM</button>
                </div>

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