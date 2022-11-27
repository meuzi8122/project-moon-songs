"use client";

import Image from "next/image";
import Youtube from "../../assets/images/youtube.svg";

export default ({ song }: SongCardProps) => {

    return (
        <div className="card card-side bg-base-300 rounded-box min-width-6xl">
            <figure>
                <img src={song.artworkUrl} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{song.title}</h2>
                <p>{`${song.game} / ${song.kind}`}</p>
                <div className="card-actions justify-end">
                    <a href={song.youtubeUrl} target="_blank" className="btn btn-primary gap-2">
                        <Image alt="YoutubeVideo" src={Youtube} />
                        Play
                    </a>
                </div>
            </div>
        </div>
    )

}