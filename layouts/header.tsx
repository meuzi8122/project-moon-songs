import Link from "next/link";
import { GAMES } from "../constants/domain";

export default () => {

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">PM Songs</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <Link href="/songs/lc">{GAMES.lc}</Link>
                    </li>
                    <li>
                        <Link href="/songs/lor">{GAMES.lor}</Link>
                    </li>
                    <li>
                        <Link href="/songs/lcb">{GAMES.lcb}</Link>
                    </li>
                </ul>
            </div>
        </div>
    )

}