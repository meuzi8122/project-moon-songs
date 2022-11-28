import Image from "next/image";
import Play from "../../assets/images/play.svg";
import { IMAGE_OPTIONS } from "../../constants/domain";

export default ({ song }: SongCardProps) => {

    return (
        <div className="card min-w-fit bg-base-100 shadow-xl image-full">
            <Image src={song.artworkUrl} alt={song.title} width={IMAGE_OPTIONS.width} height={IMAGE_OPTIONS.height} />
            <div className="card-body">
                <h2 className="card-title">{song.title}</h2>
                <p>{song.kind}</p>
                <div className="card-actions justify-end">
                    <a href={song.youtubeUrl} target="_blank" className="btn btn-primary btn-circle">
                        <Image alt="play icon" src={Play} />
                    </a>
                </div>
            </div>
        </div>
    )

}