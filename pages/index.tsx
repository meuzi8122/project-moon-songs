import type { GetStaticProps } from "next";
import Link from "next/link";
import { findSongs } from "../cms/client";

export default ({ songs }: IndexPageProps) => {

    return (
        <>
            <Link href="/songs/lc">LC</Link>
            {JSON.stringify(songs)}
        </>
    )

}

export const getStaticProps: GetStaticProps = async () => {

    return {
        props: {
            songs: await findSongs()
        }
    }

}