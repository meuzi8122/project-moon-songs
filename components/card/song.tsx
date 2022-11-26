export default ({ song }: SongCardProps) => {

    return (
        <div className="card card-side bg-base-300 rounded-box">
            <figure>
                <img src={song.artworkUrl} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{song.title}</h2>
                <div className="flex space-x-2">
                    <span className="badge badge-accent">{song.game}</span>
                    <span className="badge badge-accent">{song.kind}</span>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    )

}