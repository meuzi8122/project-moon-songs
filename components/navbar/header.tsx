import Image from "next/image";
import Link from "next/link";
import Menu from "../../assets/images/menu.svg";
import { GAMES } from "../../constants/domain";

export default () => {

    return (
        <div className="navbar bg-base-300 rounded-box">
            <div className="flex-1 px-2 lg:flex-none">
                <Link href="/" className="text-lg font-bold">PM Songs</Link>
            </div> 
            <div className="flex justify-end flex-1 px-2">
                <div className="flex items-stretch">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn bg-base-300">
                            <Image alt="Menu" src={Menu} />
                        </label>
                        <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">      
                            <li><Link href="/songs/lc">{GAMES.lc}</Link></li> 
                            <li><Link href="/songs/lor">{GAMES.lor}</Link></li>
                            <li><Link href="/songs/lcb">{GAMES.lcb}</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}